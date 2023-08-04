const express = require("express");

const app = express();

const firstHandler = (req, res, next) => {
  res.send("Response from express");
  next();
};
const secondHandler = (req, res, next) => {
  console.log("sdasd");
  next();
};

app.get("/", firstHandler, secondHandler);

app.listen(5000, () => {
  console.log("server was started on port 5000");
});
