const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    name: String,
    sugar: Number,
    calories: Number,
    carbs: Number,
    fiber: Number,
    type: String
});

const food = mongoose.model('food', foodSchema);

module.exports = food;
