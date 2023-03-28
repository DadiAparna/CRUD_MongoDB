const postModel = require('../models/postModel');

exports.createPost = async ({ name, mail }) => {
  return await postModel.create({ name, mail });
};

exports.getPosts = async () => {
  return await postModel.find();
};

exports.getPostById = async (id) => {
  return await postModel.findById(id);
};

exports.updatePost = async (id, { name, mail }) => {
  await postModel.findByIdAndUpdate(id, { name, mail });
};

exports.deletePost = async (id) => {
  await postModel.findByIdAndDelete(id);
};