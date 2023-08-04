import express from "express";
import morgan from "morgan";
import qs from "querystring";
const app = express();

app.use(morgan("combined"));
/*
app.use((req, res, next) => {
  let data = "";
  req.on("data", (chunk) => (data += chunk));
  req.on("end", () => {
    const parsedData = JSON.parse(data);
    req.body = parsedData;
    next();
  });
});
*/ //Либо встроенный мидлвар express.json()
app.use(express.json());
/*
app.use((req, res, next) => {
  if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => {
      const parsedFormData = qs.parse(data);
      console.log(parsedFormData);
    });
  }
  next();
});
*/ //Либ встроенный мидлвар express.urlencoded({extended:true}) (extended для внешнего пакета)
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(req.body, "this is body");
  return res.send("kek");
});

app.listen(3000, () => {
  console.log("server is listening at port 3000");
});
