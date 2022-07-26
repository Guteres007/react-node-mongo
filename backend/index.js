const express = require("express");
const app = express();
var cors = require("cors");
const env = require("dotenv");
const PORT = process.env.PORT || 5000;
const { db } = require("./utils/database");
var bodyParser = require("body-parser");

const categoryRoutes = require("./routes/category.routes");
const postRoutes = require("./routes/post.routes");

db();

app.use(cors());
app.use(bodyParser.json());
app.use(postRoutes);
app.use("/category", categoryRoutes);

app.listen(PORT, async (err) => {
  if (err) {
    console.log(err);
  }
});
