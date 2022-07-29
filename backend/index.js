import express from "express";
const app = express();
import cors from "cors";
import "dotenv/config";
const PORT = process.env.PORT || 5000;
import { db } from "./utils/database.js";
import bodyParser from "body-parser";

import categoryRoutes from "./routes/category.routes.js";
import postRoutes from "./routes/post.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

db();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/auth", authRoutes);
app.use("/posts", postRoutes);
app.use("/categories", categoryRoutes);

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

app.listen(PORT, async (err) => {
  if (err) {
    console.log(err);
  }
});
