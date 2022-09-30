import News from "../models/News.js";

const createService = (body) => News.create(body);

const findAllService = () => News.find();

export default {
  createService,
  findAllService
};
