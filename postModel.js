const mongoose = require('mongoose');
const schema = mongoose.Schema(
  {
    name:'string',
    mail:'string'
  },
  {timestamps: true}

)

const Post = mongoose.model('Post',schema);
module.exports = Post;