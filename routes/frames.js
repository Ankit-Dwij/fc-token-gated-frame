const {
  SYNDICATE_SDK_API_KEY,
  SYNDICATE_PROJECT_ID,
  CONTRACT_ADDRESS_CHEESE,
} = require("../constants");
const { RESPONSE_TYPE } = require("../utils/states");
const { validateFrameRequest, checkCheeseTokens } = require("../utils/utils");
const { getAddressForFid } = require("frames.js");
const { SyndicateClient } = require("@syndicateio/syndicate-node");

const router = require("express").Router();
const syndicate = new SyndicateClient({
  token: SYNDICATE_SDK_API_KEY, // Syndicate SDK
});

router.get("/health", async (req, res) => {
  try {
    res.status(200).send({ status: "active" });
  } catch (error) {
    res.status(400).send({ status: "Bad request" });
  }
});

router.get("/", async (req, res) => {
  res
    .status(200)
    .setHeader("Content-Type", "text/html")
    .send(RESPONSE_TYPE.DEFAULT);
});

router.post("/", async (req, res) => {
  try {
    const status = await validateFrameRequest(
      req.body.trustedData?.messageBytes
    );
    if (!status?.valid) {
      console.error(status);
      throw new Error("Invalid frame request");
    }

    const fid = status?.action?.interactor?.fid;
    const addressFromFid = await getAddressForFid({
      fid,
      options: {
        hubHttpUrl: "https://hub.freefarcasterhub.com:3281",
        fetchHubContext: true,
      },
    });

    // Check if user has followed & recasted
    const hasFollowedandRecasted =
      !!status?.action?.cast?.viewer_context?.recasted &&
      !!status?.action?.interactor?.viewer_context?.following;

    if (!hasFollowedandRecasted) {
      return res
        .status(200)
        .setHeader("Content-Type", "text/html")
        .send(RESPONSE_TYPE.NO_FOLLOW_NO_CHEESE);
    }

    let noOfCheese = await checkCheeseTokens(addressFromFid);

    if (noOfCheese === 0)
      return res
        .status(200)
        .setHeader("Content-Type", "text/html")
        .send(RESPONSE_TYPE.NO_FOLLOW_NO_CHEESE);

    let amount = 1000;
    if (noOfCheese >= 3 && noOfCheese < 5) {
      amount = 5000;
    } else if (noOfCheese > 5) {
      amount = 10000;
    }

    const sendTx = await syndicate.transact.sendTransaction({
      projectId: SYNDICATE_PROJECT_ID,
      contractAddress: CONTRACT_ADDRESS_CHEESE,
      chainId: 8453,
      functionSignature: "sendFramesToken(address _to, uint256 _amount)",
      args: {
        _to: addressFromFid,
        _amount: amount * 10 ** 18,
      },
    });

    res
      .status(200)
      .setHeader("Content-Type", "text/html")
      .send(RESPONSE_TYPE.SUCCESS);
  } catch (err) {
    console.log(err);
    return res
      .status(200)
      .setHeader("Content-Type", "text/html")
      .send(RESPONSE_TYPE.TRY_AGAIN_LATER);
  }
});

module.exports = router;
