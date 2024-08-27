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
      id: "objectidfake1",
    });

    res.status(200).json({ message: "Post criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllPostController = (req, res) => {
  const news = [];

  res.status(200).json(news);
};

export default { createPostController, getAllPostController };
