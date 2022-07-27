import express from "express";
const app = express();
import cors from "cors";
import env from "dotenv";
const PORT = process.env.PORT || 5000;
import { db } from "./utils/database.js";
import bodyParser from "body-parser";

import categoryRoutes from "./routes/category.routes.js";
import postRoutes from "./routes/post.routes.js";

db();
app.use(cors());
app.use(bodyParser.json());
app.use(postRoutes);
app.use("/categories", categoryRoutes);

app.listen(PORT, async (err) => {
  if (err) {
    console.log(err);
  }
});
