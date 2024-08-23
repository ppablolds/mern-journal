const create = (req, res) => {
  const user = req.body;
  const { name, username, email, password } = req.body;

  if (!name || !username || !email || !password) {
    res.json({ message: "Por favor inserir todos os dados!" });
  }

  res
    .status(200)
    .json({ message: "User created successfully!", user });
};

module.exports = { create };
