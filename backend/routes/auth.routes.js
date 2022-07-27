import express from "express";

const router = express.Router();

import AuthController from "./../controllers/auth.controller.js";

router.post("/signup", AuthController.store);

export default router;
