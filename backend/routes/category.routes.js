const express = require("express");
const router = express.Router();
const Category = require("./../models/category.model");

router.get("/save", function (req, res) {
  Category.create({ name: "Category one", description: "popisek kategorie" });
  res.status(200).json({ success: true });
});

module.exports = router;
