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

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
