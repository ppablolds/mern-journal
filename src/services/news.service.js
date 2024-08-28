import News from "../models/News.model.js";

const createPostService = (body) => News.create(body);
const getAllPostsService = (offset, limit) =>
  News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");
const countNews = () => News.countDocuments();

export default { createPostService, getAllPostsService, countNews };
