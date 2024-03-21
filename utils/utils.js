const { NEYNAR_API_KEY, SYNDICATE_PROJECT_ID } = require("../constants");

async function validateFrameRequest(data) {
  if (!data) throw new Error("No data provided !");
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      api_key: NEYNAR_API_KEY,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      cast_reaction_context: true,
      follow_context: true,
      message_bytes_in_hex: data,
    }),
  };

  return await fetch(
    "https://api.neynar.com/v2/farcaster/frame/validate",
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
}

async function isBasedUser(status) {
  const activeBadge = status?.action?.interactor?.active_status;
  const userFid = status?.action?.interactor?.fid;

  return activeBadge === "active" && userFid < 20000;
}

const checkTxnStatus = async (txnId) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer lEb6b2DDRi4pkacVjnbH");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return await fetch(
    `https://api.syndicate.io/wallet/project/${SYNDICATE_PROJECT_ID}/request/${txnId}`,
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
};

const checkCheeseTokens = async (address) => {
  try {
    let tokens = await fetch(
      `https://explorer.zora.energy/api/v2/addresses/${address}/token-balances`,
      { method: "GET" }
    )
      .then((response) => response.json())
      .catch((error) => console.log("error", error));

    if (!tokens || tokens.length === 0) return 0;

    const cheeseTokens = tokens.filter(
      (token) =>
        token?.token?.address?.toLowerCase() ===
        "0xe4ceeb0c8dd38c18692a76562343e089febc30ea"
    );

    return cheeseTokens?.length ?? 0;
  } catch (err) {
    console.log(err);
    return 0;
  }
};

module.exports = {
  validateFrameRequest,
  isBasedUser,
  checkTxnStatus,
  checkCheeseTokens,
};
