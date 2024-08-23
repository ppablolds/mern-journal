const User = require("../models/User.model");

const createService = (body) => User.create(body);
const findAllService = () => User.find();
/*const findByIdService = (id) => User.findById(id);*/

module.exports = { createService, findAllService, findByIdService };
