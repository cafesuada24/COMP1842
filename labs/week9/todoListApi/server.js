const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const Task = require('./api/models/todoListModel');
const taskRoutes = require('./api/routes/todoListRoutes'); 

const app = express();
const port = process.env.PORT ?? 3000;

mongoose.set('strictQuery', true);
try {
  mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to mongodb');
} catch(err) {
  console.error(err.message);
  throw err;
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
taskRoutes(app);

app.listen(port);
console.log(`todo list RESTful API server started on: ${port}. ID: 001306469`);

