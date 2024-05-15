const mongoose = require("mongoose");

//connecting to the database
mongoose.connect("mongodb://localhost/to_do_list_db");

//acquiring the connection to check if it is successful or not and storing it in db
const db = mongoose.connection;

//error handling
db.on("error", console.error.bind(console, "error connecting to db"));

//up and running then print the message
db.once("open", function () {
  console.log("Successfully connected to the database");
});

module.exports = db;
