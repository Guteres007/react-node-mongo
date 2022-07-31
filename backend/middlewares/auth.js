import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const auth = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        return next(createError(403, "Token is invalid"));
      }
      req.user = user;
      return next();
    });
  }
  return next(createError(403, "Token is invalid"));
};
