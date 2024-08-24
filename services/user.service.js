const User = require("../models/User.model");

const createService = (body) => User.create(body);
const findAllService = () => User.find();
const findByIdService = (id) => User.findById(id);
const updateService = (id, name, username, email, password) =>
  User.findOneAndUpdate({ _id: id }, { id, name, username, email, password });

module.exports = {
  createService,
  findAllService,
  findByIdService,
  updateService,
};
