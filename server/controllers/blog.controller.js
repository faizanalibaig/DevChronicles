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

exports.find = async function (req, res) {
  try {
    const id = req.params.id;
    const blog = await Blog.findById(id);
    res.status(200).send({
      message: 'Blog post found successfully',
      data: blog,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAll = async function (req, res) {
  try {
    const blog = await Blog.find();
    res.status(200).send({
      message: 'Blog posts found successfully',
      data: blog,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.delete = async function (req, res) {
  try {
    const id = req.params.id;
    const blog = await Blog.findByIdAndDelete(id);
    res.status(200).send({
      message: 'Blog post found and deleted successfully',
      data: blog,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.update = async function (req, res) {
  try {
    const id = req.params.id;
    const data = req.body;
    const blog = await Blog.findByIdAndUpdate(id, data);
    res.status(200).send({
      message: 'Blog post found and updated successfully',
      data: blog,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
