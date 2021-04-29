const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  daysSinceEaten: {
    type: Number,
    required: true,
  },
});

const Food = mongoose.model("FoodData", foodSchema);

module.exports = Food;
