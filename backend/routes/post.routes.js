const express = require("express");
const router = express.Router();
const postController = require("./../controllers/post.controller");

router.get("/posts", postController.index);

router.post("/post/save", postController.create);

router.delete("/post/delete", postController.delete);

module.exports = router;
