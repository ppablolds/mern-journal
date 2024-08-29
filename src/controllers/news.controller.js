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

    const total = await newsService.countNewsService();
    const currentUrl = req.baseUrl;

    const next = offset + limit;
    const nextUrl =
      next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

    const previus = offset - limit < 0 ? null : offset - limit;
    const previusUrl =
      previus != null ? `${currentUrl}?limit=${limit}&offset=${previus}` : null;

    if (posts.length === 0) {
      res.status(400).json({ message: "Não há posts." });
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

const topPostsController = async (req, res) => {
  try {
    const post = await newsService.topNewsService();

    if (!post) {
      return res.status(400);
    }

    res.status(200).json({
      post: {
        id: post._id,
        title: post.title,
        text: post.text,
        banner: post.banner,
        likes: post.likes,
        comments: post.comments,
        name: post.user.name,
        username: post.user.username,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findPostByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await newsService.findPostByIdService(id);

    res.status(200).json({
      post: {
        id: post._id,
        title: post.title,
        text: post.text,
        banner: post.banner,
        likes: post.likes,
        comments: post.comments,
        name: post.user.name,
        username: post.user.username,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const searchPostsController = async (req, res) => {
  try {
    const { title } = req.query;

    const posts = await newsService.searchPostService(title);

    if (posts.length === 0) {
      return res
        .status(400)
        .json({ message: "Não há postagem com essa nome." });
    }

    res.status(200).json({
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

const getPostUserController = async (req, res) => {
  try {
    const id = req.userId;

    const posts = await newsService.getPostUserService(id);

    res.status(200).json({
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

const updatePostController = async (req, res) => {
  try {
    const { title, text, banner } = req.body;
    const { id } = req.params;

    if (!title && !text && !banner) {
      res.json({ message: "Por favor inserir todos os dados!" });
    }

    const posts = await newsService.findPostByIdService(id);

    if (posts.user._id != req.userId) {
      res.status(400).json({ message: "Você Não pode modificar este post." });
    }

    await newsService.updatePostService(id, title, text, banner);

    res.status(200).json({ message: "Post atualizado com sucesso." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePostController = async (req, res) => {
  try {
    const { id } = req.params;

    const posts = await newsService.findPostByIdService(id);

    if (posts.user._id != req.userId) {
      res.status(400).json({ message: "Você Não pode apagar este post." });
    }

    await newsService.deletePostService(posts);

    res.status(200).json({ message: "Post apagado com sucesso." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const likePostControler = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const postLiked = await newsService.likePostService(id, userId);

    if (!postLiked) {
      await newsService.deleteLikePostService(id, userId);
      return res.status(200).json({ message: "Like removido." });
    }

    res.status(200).json({ message: "Liked" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const commentAddControler = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;
    const { comments } = req.body;

    if (!comments) {
      res.status(400).json({ message: "Escrever um comentário." });
    }

    await newsService.commentAddService(id, userId, comments);

    res.status(200).json({ message: "Comentado com sucesso." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCommentPostController = async (req, res) => {
  try {
    const { idNews, idComment } = req.params;
    const userId = req.userId;

    const commentDeleted = await newsService.deleteCommentService(
      idNews,
      idComment,
      userId
    );

    const commentFinder = commentDeleted.comments.find(
      (comment) => comment.idComment === idComment
    );

    if (commentFinder.userId !== userId) {
      return res
        .status(400)
        .json({ message: "Esse comentário não pode ser apagado por você." });
    }

    res.status(200).json({ message: "Comentário apagado com sucesso." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  createPostController,
  getAllPostController,
  topPostsController,
  findPostByIdController,
  searchPostsController,
  getPostUserController,
  updatePostController,
  deletePostController,
  likePostControler,
  commentAddControler,
  deleteCommentPostController,
};
