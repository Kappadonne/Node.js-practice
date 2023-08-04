import fs from "fs";

fs.writeFile("./first.txt", "first file text", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("file was written");
  fs.appendFile("./first.txt", "\nOne more line", (err) => {
    if (err) {
      console.log(err);
    }
    fs.rename("./first.txt", "./renamed-first.txt", (err) => {
      if (err) {
        console.log(err);
      }
      console.log("file was renamed");
    });
  });
});
