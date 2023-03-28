const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  mobileName: { type: String, required: true },
  mobileCost: { type: String, required: true },
});

module.exports = mongoose.model("Post", postSchema);