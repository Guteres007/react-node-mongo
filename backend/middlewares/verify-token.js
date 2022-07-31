import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated"));
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user = null) => {
    if (err) {
      return next(createError(403, err || "Token is invalid"));
    }
    req.user = user;
    next();
  });
};
