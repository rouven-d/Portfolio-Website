const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/legaldisclosure", (req, res) => {
  res.sendFile(__dirname + "/legaldisclosure.html");
});

app.get("/privacypolicy", (req, res) => {
  res.sendFile(__dirname + "/privacypolicy.html");
});

app.listen(3000, () => {
  console.log("server successfully started on Port 3000");
});
