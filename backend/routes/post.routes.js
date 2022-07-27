import express from "express";
import PostController from "./../controllers/post.controller.js";

const router = express.Router();

router.get("/posts", PostController.index);

router.post("/post/save", PostController.create);

//TODO: udělat lepší importy
router.delete("/post/delete", PostController.delete);

export default router;
