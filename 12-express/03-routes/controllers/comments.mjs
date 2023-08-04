const getCommentsHandler = (req, res) => {
  res.send("get comments route");
  console.log(req.params);
};

const postCommentsHandler = (req, res) => {
  res.send("Post comments route");
};

export { getCommentsHandler, postCommentsHandler };
