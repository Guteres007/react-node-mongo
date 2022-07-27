import Category from "../models/category.model.js";

const CategoryController = {
  save: async function (req, res) {
    Category.create({ name: "Category one", description: "popisek kategorie" });
    res.status(200).json({ success: true });
  },

  index: async function (req, res) {
    const categories = await Category.find({});
    res.status(200).json(categories);
  },
};

export default CategoryController;
