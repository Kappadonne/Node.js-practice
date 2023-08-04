import fs from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileName = path.join(__dirname, "./files/text.txt");
const copiedFileName = path.join(__dirname, "./files/text-copy.txt");

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(copiedFileName);

readStream.pipe(writeStream);

readStream.on("end", () => {
  console.log("read stream ended");
});
writeStream.on("finish", () => {
  console.log("write stream copied");
});
writeStream.on("end", () => {
  console.log("file was closed");
});
