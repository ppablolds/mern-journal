const User = require("../models/User.model");

const create = (body) => User.create(body);

module.exports = { create };
