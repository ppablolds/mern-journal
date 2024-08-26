import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  username: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true, select: false },
});

const User = mongoose.model("User", userSchema);

export default User;
