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
    let { limit, offset } = req.query;

    limit = Number(limit);
    offset = Number(offset);

    if (!limit) {
      limit = 5;
    }

    if (!offset) {
      offset = 0;
    }

    const posts = await newsService.getAllPostsService(offset, limit);

    const total = await newsService.countNews();
    const currentUrl = req.baseUrl;

    const next = offset + limit;
    const nextUrl =
      next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

    const previus = offset - limit < 0 ? null : offset - limit;
    const previusUrl =
      previus != null ? `${currentUrl}?limit=${limit}&offset=${previus}` : null;

    if (posts.length === 0) {
      res.status(400).json({ message: "Não há usuários." });
    }
    res.status(200).json({
      limit,
      offset,
      total,
      nextUrl,
      previusUrl,
      results: posts.map((item) => ({
        id: item._id,
        title: item.title,
        text: item.text,
        banner: item.banner,
        likes: item.likes,
        comments: item.comments,
        name: item.user.name,
        username: item.user.username,
      })),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { createPostController, getAllPostController };
