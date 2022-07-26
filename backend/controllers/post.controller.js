const Post = require("../models/post.model");
const Category = require("../models/category.model");

exports.index = async function (req, res) {
  //TODO: Post category repository pattern
  let posts = await Post.find({}).populate("category");
  res.json(posts);
};

exports.create = async function (req, res) {
  const { title, description } = req.body;
  let category = await Category.findOne().limit(1);
  Post.create({
    title,
    description,
    category: category._id,
  });
  let posts = await Post.find({}).populate("category");
  res.json(posts);
};

exports.delete = async function (req, res) {
  const { id } = req.body;
  await Post.deleteOne({ id });
  let posts = await Post.find({}).populate("category");
  res.json(posts);
};
