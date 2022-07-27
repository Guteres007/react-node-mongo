import express from "express";
import { index, create, remove } from "./../controllers/post.controller.js";

const router = express.Router();

router.get("/posts", index);

router.post("/post/save", create);

//TODO: udělat lepší importy
router.delete("/post/delete", remove);

export default router;
