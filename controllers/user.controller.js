const userService = require("../services/user.service")

const create = async (req, res) => {
  const user = await userService.create(req.body);
  const { name, username, email, password } = req.body;

  if (!user) {
    return res.status(401).json({ message: "Erro ao criar usuário." })
  }

  if (!name || !username || !email || !password) {
    res.json({ message: "Por favor inserir todos os dados!" });
  }

  res
    .status(200)
    .json({ message: "User created successfully!", user });
};

module.exports = { create };
