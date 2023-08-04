import express from "express";
import commentsRouter from "./comments.mjs";
const comments = [
  { id: 125, comment: "kekich" },
  { id: 100, comment: "roflich" },
];

const app = express();

const getRootHandler = (req, res) => {
  res.send("Response from root");
};

const deleteCommentHandler = (req, res) => {
  const commentId = req.params.commentId;
  const fixedCommentId = commentId.substring(1);
  const fixedCommentIdToNumber = Number(fixedCommentId);
  comments.filter((comment) => comment.id !== fixedCommentIdToNumber);

  res.send(comments);
};
app.use("/comments", commentsRouter);
app.route("/comments:commentId").delete(deleteCommentHandler);
app.get("/", getRootHandler);

app.listen(5000, () => {
  console.log("server was started on port 5000");
});
