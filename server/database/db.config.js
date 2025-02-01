const mongoose = require('mongoose');

const dbconfig = () => {
  try {
    mongoose.connect('mongodb://127.0.0.1:27017/blog');
    console.log('Connected to the MongoDB database');

    return mongoose.connection;
  } catch (e) {
    console.error(`Error connecting to database: ${e.message}`);
  }
};

module.exports = dbconfig;
