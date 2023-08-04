import fs from "fs";

const getHome = (req, res) => {
  fs.readFile("./files/comment-form.html", (err, data) => {
    if (err) {
      res.setHeader("Content-Type", "text/plain");
      res.statusCode = 500;
      res.end("Server error while loading html file");
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    }
  });
};
export default getHome;
