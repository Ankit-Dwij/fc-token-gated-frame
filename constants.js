const dotenv = require("dotenv");
dotenv.config();

const SERVER_URL = process.env.SERVER_URL;

const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY;

const SYNDICATE_API_KEY = process.env.SYNDICATE_API_KEY;

const SYNDICATE_SDK_API_KEY = process.env.SYNDICATE_SDK_API_KEY;

const SYNDICATE_PROJECT_ID = process.env.SYNDICATE_PROJECT_ID;

const SYNDICATE_WALLET_ADDRESS = process.env.SYNDICATE_WALLET_ADDRESS;

const CONTRACT_ADDRESS_CHEESE = process.env.CONTRACT_ADDRESS_CHEESE;

const S3_URL = process.env.S3_URL;

module.exports = {
  NEYNAR_API_KEY,
  SERVER_URL,
  SYNDICATE_API_KEY,
  SYNDICATE_PROJECT_ID,
  SYNDICATE_SDK_API_KEY,
  S3_URL,
  SYNDICATE_WALLET_ADDRESS,
  CONTRACT_ADDRESS_CHEESE,
};
