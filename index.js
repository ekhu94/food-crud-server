const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Food = require("./models/Food");

const app = express();
mongoose.connect(
  "mongodb+srv://new_user1:person1@crud.m1jh5.mongodb.net/food?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.json());
app.use(cors());

app.post("/foods", async (req, res) => {
  const food = new Food({
    name: req.body.name,
    daysSinceEaten: req.body.daysSinceEaten,
  });
  try {
    await food.save();
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => {
  console.log("Server listening on Port 5000");
});
