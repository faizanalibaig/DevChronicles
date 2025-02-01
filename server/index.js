const express = require('express');
const dbconfig = require('./database/db.config');
const blogRoute = require('./routes/blog.route');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dbconfig();

app.use('/api', blogRoute);

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
