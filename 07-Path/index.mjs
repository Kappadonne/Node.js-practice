import path from "path";

const filePath = "/Users/maxme/OneDrive/Рабочий стол/test-node.js";
const txtPath = "/Users/maxme/OneDrive/Рабочий стол/test-node.txt";
const relativePath = "./node/movie.mov";

const test1 = path.isAbsolute(filePath);
const test2 = path.isAbsolute(relativePath);
console.log(test1, test2);

console.log(path.basename(filePath));

console.log(path.extname(filePath));

const parsedPath = path.parse(filePath);
const kekich = path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`);
console.log(kekich, parsedPath);
