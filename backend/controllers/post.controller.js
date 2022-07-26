const Post = require("../models/post.model");

exports.index = async function (req, res) {
  let posts = await Post.find({});
  res.json(posts);
};

exports.create = async function (req, res) {
  const { title, description } = req.body;
  Post.create({ title, description });
  let posts = await Post.find({});
  res.json(posts);
};

exports.delete = async function (req, res) {
  const { id } = req.body;
  await Post.deleteOne({ id });
  let posts = await Post.find({});
  res.json(posts);
};
