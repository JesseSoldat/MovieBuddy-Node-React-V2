require("dotenv").config({ path: "../.env.dev" });
const express = require("express");
const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.get("*", (req, res) => {
  res.send(`My Server is up on port: ${PORT}`);
});

app.listen(PORT);
