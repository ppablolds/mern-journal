import News from "../models/News.model.js";

const createPostService = (body) => News.create(body);
const getAllPostsService = () => News.find();

export default { createPostService, getAllPostsService };
