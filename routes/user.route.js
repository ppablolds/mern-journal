const express = require("express");
const route = express.Router();
const userController = require("../controllers/user.controller");

const { validId, validUser } = require("../middleware/global.middleware")

route.post("/", userController.create);
route.get("/", userController.findAll);
route.get("/:id", validId, validUser, userController.findById);
route.patch("/:id", validId, validUser, userController.updateUser);
route.delete("/:id", validId, validUser, userController.deleteUser);

module.exports = route;
