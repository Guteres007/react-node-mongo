const express = require("express");
const router = express.Router();
const Post = require("./../models/post");

router.get("/posts", async function (req, res) {
  let posts = await Post.find({});
  res.json(posts);
});

router.post("/post/save", async function (req, res) {
  const { title, description } = req.body;
  Post.create({ title, description });
  let posts = await Post.find({});
  res.json(posts);
});

router.delete("/post/delete", async function (req, res) {
  const { id } = req.body;
  await Post.deleteOne({ id });
  let posts = await Post.find({});
  res.json(posts);
});

module.exports = router;
