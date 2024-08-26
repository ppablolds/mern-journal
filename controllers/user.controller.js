const userService = require("../services/user.service");

const create = async (req, res) => {
  const { name, username, email, password } = req.body;

  if (!name || !username || !email || !password) {
    res.json({ message: "Por favor inserir todos os dados!" });
  }

  const user = await userService.createService(req.body);

  if (!user) {
    return res.status(401).json({ message: "Erro ao criar usuário." });
  }

  res.status(200).json({ message: "Usuário criado com sucesso!", user });
};

const findAll = async (req, res) => {
  const users = await userService.findAllService();

  if (users.length === 0) {
    res.status(400).json({ message: "Não há usuários." });
  }
  res.status(200).json(users);
};

const findById = async (req, res) => {
  const user = req.user;

  res.status(200).json(user);
};

const updateUser = async (req, res) => {
  const { name, username, email, password } = req.body;

  if (!name && !username && !email && !password) {
    res.json({ message: "Por favor alterar algum dado!" });
  }

  const id = req.id;

  await userService.updateUserService(id, name, username, email, password);

  res.status(200).json({ message: "Usuário atualizado com sucesso." });
};

const deleteUser = async (req, res) => {
  const { id, user } = req;

  if (!id) {
    return res.status(404).json({ message: "ID não encontrado." });
  }

  await userService.deleteUserService(user);

  res.status(200).json({ message: "Usuário excluido." });
};

module.exports = { create, findAll, findById, updateUser, deleteUser };
