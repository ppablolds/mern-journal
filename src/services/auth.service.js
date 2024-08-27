import User from "../models/User.model.js";
import jwt from "jsonwebtoken";

const loginService = (email) =>
  User.findOne({ email: email }).select("+password");

const tokenGeneretor = (id) =>
  jwt.sign({ id: id }, process.env.SECRET_KEY, { expiresIn: 86400 });

export default { loginService, tokenGeneretor };
