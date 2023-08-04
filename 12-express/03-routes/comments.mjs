import express from "express";
import {
  getCommentsHandler,
  postCommentsHandler,
} from "./controllers/comments.mjs";

const commentsRouter = express.Router();

commentsRouter.route("/").get(getCommentsHandler).post(postCommentsHandler);

export default commentsRouter;
