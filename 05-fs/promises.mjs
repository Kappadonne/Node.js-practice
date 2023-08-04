import fs from "fs";

fs.promises
  .writeFile("./promises-second.txt", "Kek")
  .then(fs.promises.appendFile("./promises-second.txt", "\nNew line of text"))
  .then(
    fs.promises.rename("./promises-second.txt", "./promises-second-renamed.txt")
  )

  .catch((err) => console.log(err));
