import http from "http";
import fs from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "./files/text.txt");
const htmlPath = path.join(__dirname, "./files/index.html");
const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    const reader = fs.createReadStream(htmlPath);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    reader.pipe(res);
  }
});

server.listen(5000, () => {
  console.log("server is listening");
});

fs.readFile(filePath, "utf8", (err, data) => {
  console.log(data);
});

const readStream = fs.createReadStream(filePath, "utf-8");
const writeStream = fs.createWriteStream("./f_copy.txt");
readStream.pipe(writeStream);
