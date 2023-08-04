import { argv } from "process";
import fs from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

if (!process.argv[2] || !process.argv[3]) {
  console.log("not enough args");
  process.exit();
}

const fileName = process.argv[2];
const lineQty = parseInt(process.argv[3]);
if (isNaN(lineQty)) {
  console.log("lines qty must be a number");
  process.exit();
}

const writeStream = fs.createWriteStream(path.join(__dirname, fileName));

for (let i = 1; i <= lineQty; i++) {
  writeStream.write(`this is a line number ${i} in the auto generated file\n`);
}
writeStream.end(() => {
  console.log(
    `auto generated file ${fileName} was created with ${lineQty} amount of lines`
  );
});
