import express from "express";
const app = express();
import cors from "cors";
import "dotenv/config";
const PORT = process.env.PORT || 5000;
import { db } from "./utils/database.js";
import bodyParser from "body-parser";
import consola from "consola";

import categoryRoutes from "./routes/category.routes.js";
import postRoutes from "./routes/post.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import { configJWTStrategy } from "./middlewares/jwt-token-middleware.js";
import passport from "passport";

db();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use("/auth", authRoutes);
configJWTStrategy();
app.use("/posts", postRoutes);
app.use("/categories", categoryRoutes);
app.get("/me", passport.authenticate("jwt", { session: false }), (req, res) => {
  res.json("skrytý obsah :D");
});

//handle chyb z rout
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Něco se pokazilo";
  res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(PORT, (err) => {
  if (err) {
    consola.error(err);
  }
  consola.success({ badge: true, message: `Server listening on port ${PORT}` });
});
