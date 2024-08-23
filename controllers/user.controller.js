const userService = require("../services/user.service");
const mongoose = require("mongoose");

const create = async (req, res) => {
  const user = await userService.createService(req.body);
  const { name, username, email, password } = req.body;

  if (!user) {
    return res.status(401).json({ message: "Erro ao criar usuário." });
  }

  if (!name || !username || !email || !password) {
    res.json({ message: "Por favor inserir todos os dados!" });
  }

  res.status(200).json({ message: "Usuário criado com sucesso!", user });
};

const findAll = async (req, res) => {
  const users = await userService.findAllService();

  if (users.length === 0) {
    res.status(400).send({ message: "Não há usuários." });
  }
  res.send(users);
};

const findById = async (req, res) => {
  const id = req.params.id;
  const user = await userService.findByIdService(id);
  if (!user) {
    return res.status(400).send({ message: "Não há usuários." });
  }
  return res.send(user);
};

module.exports = { create, findAll, findById };
