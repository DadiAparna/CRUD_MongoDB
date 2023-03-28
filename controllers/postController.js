const postService = require("../services/postService");

exports.createPost = async (req, res) => {
  const { name, mail } = req.body;

  try {
    ///console.log('create post')
    await postService.createPost({ name, mail });
    ///console.log('post created')
    res.json("Created Successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await postService.getPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await postService.getPostById(id);
    res.json(post);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const { name, mail } = req.body;
  try {
    await postService.updatePost(id, { name, mail });
    res.json("Updated Successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    await postService.deletePost(id);
    res.json("Deleted Successfully");
  } catch (error) {
    res.status(500).send(error);
  }
}


