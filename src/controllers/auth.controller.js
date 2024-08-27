import bcrypt from "bcrypt";
import authService from "../services/auth.service.js";

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await authService.loginService(email);

    if (!user) {
      return res.status(404).json({ message: "Usuário ou senha inválida. " });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(400).json({ message: "Usuário ou senha inválida." });
    }

    const token = authService.tokenGeneretor(user.id);

    res.status(200).json({token});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default { login };
