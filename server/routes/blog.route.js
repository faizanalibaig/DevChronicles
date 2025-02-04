const express = require('express');
const Router = express.Router();
const Blog = require('../controllers/blog.controller');

Router.use(express.json());
Router.post('/blog', Blog.create);
Router.get('/blog/getAll', Blog.getAll);
Router.get('/blog/find/:slug', Blog.find);

module.exports = Router;
