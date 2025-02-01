const express = require('express');
const Router = express.Router();
const Blog = require('../controllers/blog.controller');

Router.use(express.json());
Router.post('/blog', Blog.create);

module.exports = Router;
