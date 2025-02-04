const mongoose = require('mongoose');

const blog = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  content: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10000,
  },
  author: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 255,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: (v) => /^[a-z0-9-]+$/i.test(v),
      message: 'Slug can only contain alphanumeric characters and hyphens.',
    },
    index: true,
  },
  publish_date: {
    type: Date,
    default: Date.now,
    validate: {
      validator: (v) => v < new Date(),
      message: 'Publish date cannot be in the future.',
    },
  },
  updatedAt: Date,
});

module.exports = mongoose.model('Blog', blog);
