import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import User from "./../models/user.model.js";
import { Strategy, ExtractJwt } from "passport-jwt";
import passport from "passport";
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
    const { password, ...userData } = user._doc;
    if (!user) {
      return next(createError(400, "User not found"));
    }
    let isMatchedPassword = await bcrypt.compare(req.body.password, password);
    if (!isMatchedPassword) {
      next(createError(401, "Špatné údaje"));
    } else {
      const token = jwt.sign({ userData }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1h",
      });
      res.status(200).json({
        token,
      });
    }
  },
  destroy: async function (req, res, next) {
    res.status(200).json("Ok");
  },
};

export default AuthController;
