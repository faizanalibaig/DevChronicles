const Blog = require('../model/blog.model');

exports.create = async function (req, res) {
  try {
    const blog = await Blog.create(req.body);
    res.status(200).send({
      message: 'Blog post created successfully',
      data: blog,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
