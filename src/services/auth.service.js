import User from "../models/User.model.js";

const loginService = (email) =>
  User.findOne({ email: email }).select("+password");

export default { loginService };
