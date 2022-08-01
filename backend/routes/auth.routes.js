import express from "express";

const router = express.Router();

import AuthController from "./../controllers/auth.controller.js";

router.post("/signup", AuthController.signup);
router.post("/login", AuthController.login);
router.post("/destroy", AuthController.destroy);

export default router;
