import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String },
  tags: { type: String, required: true },
  email: { type: String },
});

const File = mongoose.model("File", FileSchema);
export default File;
