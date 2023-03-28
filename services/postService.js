const postModel = require('../models/postModel');

exports.createPost = async ({ mobileName, mobileCost }) => {
  return await postModel.create({ mobileName, mobileCost });
};

exports.getPosts = async () => {
  return await postModel.find();
};

exports.getPostById = async (id) => {
  return await postModel.findById(id);
};

exports.updatePost = async (id, { mobileName, mobileCost }) => {
  await postModel.findByIdAndUpdate(id, { mobileName, mobileCost });
};

exports.deletePost = async (id) => {
  await postModel.findByIdAndDelete(id);
};