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

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
