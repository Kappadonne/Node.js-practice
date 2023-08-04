import express from "express";
import morgan from "morgan";
import cors from "cors";
const app = express();

app.use(morgan("combined"));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(req.body, "this is body");
  next();
});
app.use(cors());

app.get("/main", (req, res) => {
  const testData = {
    firstData: "first",
    secondData: "second",
  };
  return res.json(testData);
});

app.listen(5000, () => {
  console.log("server is listening at port 5000");
});
