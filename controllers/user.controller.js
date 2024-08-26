import userService from "../services/user.service.js";

const create = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    if (!name || !username || !email || !password) {
      res.json({ message: "Por favor inserir todos os dados!" });
    }

    const user = await userService.createService(req.body);

    if (!user) {
      return res.status(401).json({ message: "Erro ao criar usuário." });
    }

    res.status(200).json({ message: "Usuário criado com sucesso!", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const users = await userService.findAllService();

    if (users.length === 0) {
      res.status(400).json({ message: "Não há usuários." });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findById = async (req, res) => {
  try {
    const user = req.user;

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    if (!name && !username && !email && !password) {
      res.json({ message: "Por favor alterar algum dado!" });
    }

    const id = req.id;

    await userService.updateUserService(id, name, username, email, password);

    res.status(200).json({ message: "Usuário atualizado com sucesso." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id, user } = req;

    if (!id) {
      return res.status(404).json({ message: "ID não encontrado." });
    }

    await userService.deleteUserService(user);

    res.status(200).json({ message: "Usuário excluido." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { create, findAll, findById, updateUser, deleteUser };
