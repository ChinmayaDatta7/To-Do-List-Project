const mongoose = require("mongoose");

//creating a schema for the to do list
const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
    default: Date.now,
    trim: true,
  },
});

//creating a model for the to do list
const List = mongoose.model("List", todoSchema);

//exporting the model
module.exports = List;
