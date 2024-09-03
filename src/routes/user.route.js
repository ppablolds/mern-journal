import { Router } from "express";
import userController from "../controllers/user.controller.js";
import { validId, validUser } from "../middleware/global.middleware.js";

const route = Router();

route.post("/create", userController.create);
route.get("/findall", userController.findAll);
route.get("/findbyid/:id", validId, validUser, userController.findById);
route.patch("/updateuser/:id", validId, validUser, userController.updateUser);
route.delete("/deleteuser/:id", validId, validUser, userController.deleteUser);

export default route;
