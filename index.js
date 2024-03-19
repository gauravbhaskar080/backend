const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/youtube", (req, res) => {
  res.send("<h1>Chai aur code</h1>");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
