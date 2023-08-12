const express = require("express");
const { addContactUs } = require("./contactUs");
const app = express();
const port = 3000;

// Used to solve data not recieved at backend
app.use(express.json());

// Use to solve cors error
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/contactUs", addContactUs);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
