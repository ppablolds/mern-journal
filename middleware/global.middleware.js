import mongoose from "mongoose";
import userService from "../services/user.service.js";

export const validId = (req, res, next) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "ID Inválido." });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const validUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const user = await userService.findByIdService(id);

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    req.id = id;
    req.user = user;

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
