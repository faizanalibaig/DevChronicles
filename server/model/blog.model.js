const mongoose = require('mongoose');

const blog = mongoose.Schema({
  title: String,
  content: String,
  author: String,
  slug: String,
  publish_date: { type: Date, default: Date.now },
  updatedAt: Date,
});

module.exports = mongoose.model('Blog', blog);
