import newsService from "../services/news.service.js";

const createPostController = async (req, res) => {
  try {
    const { title, text, banner } = req.body;

    if (!title || !text || !banner) {
      res.json({ message: "Por favor inserir todos os dados!" });
    }

    await newsService.createPostService({
      title,
      text,
      banner,
      user: req.userId,
    });

    res.status(200).json({ message: "Post criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllPostController = async (req, res) => {
  try {
    const posts = await newsService.getAllPostsService();

    if (posts.length === 0) {
      res.status(400).json({ message: "Não há usuários." });
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { createPostController, getAllPostController };
