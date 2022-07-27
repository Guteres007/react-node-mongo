import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import User from "./../models/user.model.js";

const AuthController = {
  store: async function store(req, res, next) {
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
};

export default AuthController;
