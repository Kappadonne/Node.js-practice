import fs from "fs";

fs.writeFileSync("./sync-third.txt", "sync file");
fs.appendFileSync("./sync-third.txt", "\nnew data is here");
fs.renameSync("./sync-third.txt", "./sync-third-renamed.txt");
