const express = require("express");
const route = express.Router();
const userController = require("../controllers/user.controller");

route.post("/", userController.create);
route.get("/", userController.findAll);
route.get("/:id", userController.findById);

module.exports = route;
