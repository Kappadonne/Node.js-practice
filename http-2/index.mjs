import http from "http";
import data from "./data.mjs";
import fs from "fs";
const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Server error while loading html file");
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
  }
  if (req.url === "/" && req.method === "POST") {
    let userData = "";
    req.on("data", (chunk) => {
      userData += chunk;
    });
    req.on("end", () => {
      const parsed = JSON.parse(userData);
      data.push(parsed);
      res.statusCode = 200;
      res.end("Comment data was received");
    });
    return;
  } else {
    res.statusCode = 400;
    res.end("Wrong data");
  }
});
server.listen("3000");
