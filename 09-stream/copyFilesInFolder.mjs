import fs, { createReadStream, createWriteStream } from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceDir = path.join(__dirname, "./files");
const destinationDir = path.join(__dirname, "./copied-files");

if (!fs.existsSync(sourceDir)) {
  console.log(`Source dir ${sourceDir} doesn't exist`);
  console.log("Exiting...");
  process.exit(0);
}
if (fs.existsSync(destinationDir)) {
  fs.rmdirSync(destinationDir);
  console.log("destination dir removed");
}
fs.mkdirSync(destinationDir);

fs.readdir(sourceDir, (err, fileNames) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(fileNames);
  fileNames.forEach((fileName, index) => {
    const sourceFilePath = path.join(sourceDir, fileName);

    const destinationFilePath = path.join(
      destinationDir,
      `${index}.${fileName}`
    );

    const readStream = createReadStream(sourceFilePath);
    const writeStream = createWriteStream(destinationFilePath);
    readStream.pipe(writeStream);
    writeStream.on("finish", () => {
      console.log(`file ${fileName} was copied`);
    });
    process.exit(0);
  });
});
