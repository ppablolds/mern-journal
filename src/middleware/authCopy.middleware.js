import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import userService from "../services/user.service.js";

dotenv.config();

export const authMiddleware = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      res.status(401).json({ message: "Invalid authorization" });
    }

    const parts = authorization.split(" ");

    if (parts.length !== 2) {
      res.status(401).json({ message: "Usuário não logado." });
    }

    const [schema, token] = parts;

    if (!schema !== "Bearer") {
      res.status(401);
    }

    jwt.verify(token, process.env.SECRET_KEY, async (error, decoded) => {
      if (error) {
        res.status(401);
      }

      const user = await userService.findByIdService(decoded.id);

      if (!user || !user.id) {
        res.status(401);
      }

      req.userId = user.id;

      return next();
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
