const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (_req, res) => {
  let rawdata = fs.readFileSync("words.json");
  let words = JSON.parse(rawdata);
  const wordsList = words.words;

  const length = wordsList.length;
  const randomIndex = Math.floor(Math.random() * length);

  res.send(wordsList[randomIndex]);
});

app.listen(3000);

console.log("Server started at http://localhost:".concat(3000));
