import express from "express";
import { cacheMiddleware } from "../middlewares/cache-middleware.js";
import CategoryController from "../controllers/category.controller.js";

const router = express.Router();

router.get("/", cacheMiddleware, CategoryController.index);
router.get("/save", CategoryController.save);

export default router;
