import mongoose from "mongoose";

export async function db() {
  await mongoose.connect("mongodb://localhost:27017/react");
}
