const express = require("express");
const mongoose = require("mongoose");

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

app.listen(5000, () => {
  console.log("Server listening on Port 5000");
});
