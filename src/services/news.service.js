import News from "../models/News.model.js";

const createPostService = (body) => News.create(body);
const getAllPostsService = (offset, limit) =>
  News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");
const countNewsService = () => News.countDocuments();
const topNewsService = () => News.findOne().sort({ _id: -1 }).populate("user");
const findPostByIdService = (id) => News.findById(id).populate("user");
const searchPostService = (title) =>
  News.find({ title: { $regex: `${title || ""}`, $options: "i" } })
    .sort({ _id: -1 })
    .populate("user");
const getPostUserService = (id) =>
  News.find({ user: id }).sort({ _id: -1 }).populate("user");
const updatePostService = (id, title, text, banner) =>
  News.findOneAndUpdate(
    { _id: id },
    { title, text, banner },
    { rawResult: true }
  );
const deletePostService = (id) => News.findOneAndDelete({ _id: id });
const likePostService = (idNews, userId) =>
  News.findOneAndUpdate(
    { _id: idNews, "likes.userId": { $nin: [userId] } },
    { $push: { likes: { userId, created: new Date() } } }
  );
const deleteLikePostService = (idNews, userId) =>
  News.findOneAndUpdate({ _id: idNews }, { $pull: { likes: { userId } } });

export default {
  createPostService,
  getAllPostsService,
  countNewsService,
  topNewsService,
  findPostByIdService,
  searchPostService,
  getPostUserService,
  updatePostService,
  deletePostService,
  likePostService,
  deleteLikePostService,
};
