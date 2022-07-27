import express from "express";
import PostController from "./../controllers/post.controller.js";

const router = express.Router();

router.get("/", PostController.index);

router.post("/save", PostController.create);

router.delete("/delete", PostController.delete);

export default router;
