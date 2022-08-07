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
import errorMiddleware from "./middlewares/error-middleware.js";

db();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use("/auth", authRoutes);
//nastavení JWT tokenu
configJWTStrategy();
//nastavení authorizace pro routy
app.use(passport.authenticate("jwt", { session: false }));
app.use("/posts", postRoutes);
app.use("/categories", categoryRoutes);
//handle chyb z rout
app.use(errorMiddleware);

app.listen(PORT, (err) => {
  if (err) {
    consola.error(err);
  }
  consola.success({ badge: true, message: `Server listening on port ${PORT}` });
});
