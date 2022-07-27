import Post from "../models/post.model.js";
import Category from "../models/category.model.js";

const PostController = {
  index: async function (req, res) {
    //TODO: Post category repository pattern
    let posts = await Post.find({}).populate("category");
    res.json(posts);
  },

  create: async function (req, res) {
    const { title, description, category_id } = req.body;
    Post.create({
      title,
      description,
      category: category_id,
    });
    let posts = await Post.find({}).populate("category");
    res.json(posts);
  },

  delete: async function (req, res) {
    const { id } = req.body;
    await Post.deleteOne({ id });
    let posts = await Post.find({}).populate("category");
    res.json(posts);
  },
};

export default PostController;
