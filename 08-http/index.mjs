import http from "http";
import getHome from "./getHome.mjs";

const someData = [
  { kek: 1, rofl: 2 },
  { zasd: 5, sqqwd: "asd" },
  { asdas: 214124 },
];

const server = http.createServer((req, res) => {
  if (req.url === "/json" && req.method === "GET") {
    req.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.end(JSON.stringify(someData));
    return;
  }

  if (req.url === "/json" && req.method === "POST") {
    if (req.headers["content-type"] === "application/json") {
      let userData = "";
      req.on("data", (chunk) => (userData += chunk));

      req.on("end", () => {
        const parsed = JSON.parse(userData);
        someData.push(parsed);
        res.statusCode = 200;
        res.end("Comment data was received");
      });
    } else {
      res.statusCode = 400;
      res.end("Wrong");
    }
    return;
  }

  if (req.url === "/json" && req.method === "GET") {
    return getHome(req, res);
  }

  res.statusCode = 404;
  res.setHeader("Content-type", "text/html");
  res.end("<h1>Page not found!</h1>");
});

server.listen(3000, () => {
  console.log("server is working");
});
