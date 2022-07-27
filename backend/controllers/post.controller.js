import Post from "../models/post.model.js";
import Category from "../models/category.model.js";

export async function index(req, res) {
  //TODO: Post category repository pattern
  let posts = await Post.find({}).populate("category");
  res.json(posts);
}

export async function create(req, res) {
  const { title, description } = req.body;
  let category = await Category.findOne().limit(1);
  Post.create({
    title,
    description,
    category: category._id,
  });
  let posts = await Post.find({}).populate("category");
  res.json(posts);
}

export async function remove(req, res) {
  const { id } = req.body;
  await Post.deleteOne({ id });
  let posts = await Post.find({}).populate("category");
  res.json(posts);
}
