import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import User from "./../models/user.model.js";
import jwt from "jsonwebtoken";

const AuthController = {
  signup: async function (req, res, next) {
    try {
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(req.body.password, salt);
      let userData = { ...req.body, password: hash };

      await User.create(userData);
      res.status(200).json("OK");
    } catch (error) {
      next(createError(400, "Něco se pokazilo při vytváření Uživatele"));
    }
  },
  login: async function (req, res, next) {
    const user = await User.findOne({ email: req.body.email });
    let isMatchedPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isMatchedPassword) {
      next(createError(400, "Něco se pokazilo při vytváření Uživatele"));
    } else {
      let accessToken = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
      res.status(200).json({
        username: user.name,
        accessToken,
      });
    }
  },
};

export default AuthController;
