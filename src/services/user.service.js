import User from "../models/User.model.js";

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

const updateUserService = (id, name, username, email, password) =>
  User.findOneAndUpdate({ _id: id }, { id, name, username, email, password });

const deleteUserService = (id) => User.findOneAndDelete(id);

export default {
  createService,
  findAllService,
  findByIdService,
  updateUserService,
  deleteUserService,
};
