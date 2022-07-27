import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

export default mongoose.model("Post", postSchema);
