const express = require("express");
const app = express();
const dotenv = require("dotenv");
const framesRoute = require("./routes/frames");

const cors = require("cors");

app.use(cors());
dotenv.config();
app.use(express.json());

app.use("/", framesRoute);

app.listen(3000, () => {
  console.log("frames server is running...");
});
