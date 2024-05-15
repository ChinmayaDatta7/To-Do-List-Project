//imoprting the express module and storing it in a variable
const express = require("express");
const app = express();
const path = require("path");

//storing the port number in a variable for running the server
const port = 8000;

//importing the database
const db = require("./config/mongoose");
const List = require("./models/list");

//for setting up the view engine and views folder
app.set("view engine", "ejs");
app.set("views", "./views");

//middleware to parse the data from the form in the Html page and put it in the req.body
app.use(express.urlencoded());

//middleware to use static files like css, js, images
app.use(express.static("assets"));

//array for storing the to do lists in the form of objects without database
// var lists = [
//   { text: "Learn HTML", date: "2020-06-01" },
//   { text: "Learn CSS", date: "2020-06-02" },
//   { text: "Learn JavaScript", date: "2020-06-03" },
//   { text: "Learn NodeJS", date: "2020-06-04" },
// ];

//to get the home page of the website and render the home.ejs file
app.get("/", async function (req, res) {
  try {
    //to find sepcific query using find() filter
    const toDoLists = await List.find({});
    return res.render("home", {
      todo_list: toDoLists,
    });
  } catch (err) {
    console.error("Error in fetching to do lists from the database:", err);
    // Handle the error here or send an error response
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

//to create a new to do list and add it to the database
app.post("/create-list", async function (req, res) {
  // lists.push(req.body);

  try {
    const newList = await List.create({
      text: req.body.text,
      date: req.body.date,
    });
    console.log("*********", newList);
    return res.redirect("back");
  } catch (err) {
    console.error("Error in creating a To Do List:", err);
    // Handle the error here or send an error response
    return res.status(500).json({ error: "Internal Server Errors" });
  }
});

//to delete a to do list from the database
app.get("/delete-list", async function (req, res) {
  console.log(req.query);
  let id = req.query.id;

  try {
    const deletedList = await List.findByIdAndDelete(id);
    if (!deletedList) {
      // Handle the case where the document with the given ID was not found
      console.log("List not found.");
      return res.status(404).json({ error: "List not found." });
    }
    return res.redirect("back");
  } catch (err) {
    console.error("Error in deleting an object from the database:", err);
    // Handle the error here or send an error response
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

//to run the server on port 8000
app.listen(port, function (err) {
  if (err) {
    console.log("Error in running the server", err);
  }
  console.log("Server is running on port", port);
});
