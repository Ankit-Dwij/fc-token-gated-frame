const { SERVER_URL, S3_URL } = require("../constants");
const DEFAULT = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta property="of:accepts:xmtp" content="2024-02-01" />
        <meta name="viewport" content="width=device-width" />
        <meta property="og:title" content="Frame token!" />
        <meta
          property="og:image"
          content="${S3_URL}/v2/default.png"
        />
        <meta property="fc:frame" content="vNext" />
        <meta
          property="fc:frame:image"
          content="${S3_URL}/v2/default.png"
        />
        <meta property="fc:frame:button:1" content="Claim" />
        <meta
          name="fc:frame:post_url"
          content="${SERVER_URL}/v2"
        />
        <meta
          name="of:post_url"
          content="${SERVER_URL}/v2"
        />
        <meta
          name="xmtp:frame:post-url"
          content="${SERVER_URL}/v2"
        />
      </head>
    </html>
    `;

const SUCCESS = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta property="of:accepts:xmtp" content="2024-02-01" />
          <meta name="viewport" content="width=device-width" />
          <meta property="og:title" content="Success !" />
          <meta
            property="og:image"
            content="${S3_URL}/v2/success.png"
          />
          <meta property="fc:frame" content="vNext" />
          <meta
            property="fc:frame:image"
            content="${S3_URL}/v2/success.png"
          />
          <meta
            property="fc:frame:button:1"
            content="Back to start"
          />
          <meta
            name="fc:frame:post_url"
            content="${SERVER_URL}/v2"
          />
          <meta
          name="of:post_url"
          content="${SERVER_URL}/v2"
        />
        <meta
          name="xmtp:frame:post-url"
          content="${SERVER_URL}/v2"
        />
        </head>
      </html>
    `;

const NO_FOLLOW_NO_CHEESE = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta property="of:accepts:xmtp" content="2024-02-01" />
          <meta name="viewport" content="width=device-width" />
          <meta property="og:title" content="content" />
          <meta
            property="og:image"
            content="${S3_URL}/v2/follow.png"
          />
          <meta property="fc:frame" content="vNext" />
          <meta
            property="fc:frame:image"
            content="${S3_URL}/v2/follow.png"
          />
          <meta
            property="fc:frame:button:1"
            content="Try again"
          />
          <meta
            name="fc:frame:post_url"
            content="${SERVER_URL}/v2"
          />
          <meta
          name="of:post_url"
          content="${SERVER_URL}/v2"
        />
        <meta
          name="xmtp:frame:post-url"
          content="${SERVER_URL}/v2"
        />
        </head>
      </html>`;

const TRY_AGAIN_LATER = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta property="of:accepts:xmtp" content="2024-02-01" />
          <meta name="viewport" content="width=device-width" />
          <meta property="og:title" content="Try again later !" />
          <meta
            property="og:image"
            content="${S3_URL}/v2/try_again.png"
          />
          <meta property="fc:frame" content="vNext" />
          <meta
            property="fc:frame:image"
            content="${S3_URL}/v2/try_again.png"
          />         
        </head>
      </html>`;

const RESPONSE_TYPE = {
  DEFAULT,
  SUCCESS,
  NO_FOLLOW_NO_CHEESE,
  TRY_AGAIN_LATER,
};

module.exports = { RESPONSE_TYPE };
