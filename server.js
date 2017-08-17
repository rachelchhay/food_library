const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));

const foodStatsController = require('./controllers/foodStats.js');
app.use('/food', foodStatsController);

mongoose.connect('mongodb://localhost:27017/food_library', {
  useMongoClient: true
});
mongoose.connection.once('open', () => {
  console.log('Mongo is ready to go');
});

app.get('/', (req, res) => {
  res.send('Hello World')
});




















app.listen(3000, () => {
  console.log('======================');
  console.log('Food Library working');
  console.log('======================');
});
