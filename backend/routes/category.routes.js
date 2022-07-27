import express from "express";
import Category from "./../models/category.model.js";

const router = express.Router();

router.get("/save", function (req, res) {
  Category.create({ name: "Category one", description: "popisek kategorie" });
  res.status(200).json({ success: true });
});

export default router;
