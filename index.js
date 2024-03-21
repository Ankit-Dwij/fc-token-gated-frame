const express = require("express");
const app = express();
const dotenv = require("dotenv");
const framesV2Route = require("./routes/frames");

const cors = require("cors");

app.use(cors());
dotenv.config();
app.use(express.json());

app.use("/", framesV2Route);

app.listen(3000, () => {
  console.log("frames server is running...");
});
