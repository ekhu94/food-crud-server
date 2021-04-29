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

app.get("/foods", async (req, res) => {
  try {
    const foods = await Food.find({});
    res.json(foods);
  } catch (err) {
    console.log(err);
  }
});

app.get("/foods/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const food = await Food.findById(id);
    res.json(food);
  } catch (err) {
    console.log(err);
  }
});

app.post("/foods", async (req, res) => {
  const food = new Food({
    name: req.body.name,
    daysSinceEaten: req.body.daysSinceEaten,
  });
  try {
    await food.save();
    res.json(food);
  } catch (err) {
    console.log(err);
  }
});

app.patch("/foods/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const food = await Food.findByIdAndUpdate(id, { name: req.body.name });
    res.json(food);
  } catch (err) {
    console.log(err);
  }
});

app.delete("/foods/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Food.findByIdAndDelete(id);
    res.send("Food successfully deleted.");
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => {
  console.log("Server listening on Port 5000");
});
