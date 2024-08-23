const express = require("express");
const route = express.Router();
const userController = require("../controllers/user.controller");

route.post("/", userController.create);

module.exports = route;
