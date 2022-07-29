import express from "express";

const router = express.Router();

import AuthController from "./../controllers/auth.controller.js";

router.post("/signup", AuthController.signup);
router.post("/login", AuthController.login);

export default router;
