const express = require("express");
const route = express.Router();
const userController = require("../controllers/user.controller");

route.get("/", userController.user);

module.exports = route;
