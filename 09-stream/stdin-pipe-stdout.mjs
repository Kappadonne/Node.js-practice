import { Stream, Transform } from "stream";
import { dirname } from "path";
import path from "path";
import fs, { createWriteStream } from "fs";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const filePath = path.join(__dirname, "./kekich.txt");

const upperCaseStream = new Transform({
  transform: (chunk, encoding, callback) => {
    const upperCased = chunk.toString().toUpperCase();
    console.log(upperCased);
    callback(null, upperCased);
  },
});

const reverseStream = new Transform({
  transform: (chunk, encoding, callback) => {
    const reversed = chunk.toString().split("").reverse().join("");
    console.log(reversed);
    callback(null, reversed);
  },
});

const writeStream = createWriteStream(filePath, "utf-8");
process.stdin.pipe(upperCaseStream).pipe(reverseStream).pipe(writeStream);
