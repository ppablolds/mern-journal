import News from "../models/News.model.js";

const createPostService = (body) => News.create(body);
const getAllPostsService = (offset, limit) =>
  News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");
const countNewsService = () => News.countDocuments();
const topNewsService = () => News.findOne().sort({ _id: -1 }).populate("user");
const findPostByIdService = (id) => News.findById(id).populate("user");

export default {
  createPostService,
  getAllPostsService,
  countNewsService,
  topNewsService,
  findPostByIdService,
};
