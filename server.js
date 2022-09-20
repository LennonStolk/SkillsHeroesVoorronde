var express = require("express");
var app = express();
const PORT = 8080;

// Set the view engine to ejs
app.set("view engine", "ejs");

// Index page
app.get("/", function(req, res) {
  res.render("Pages/GameList");
});

// Run server
app.listen(PORT);
console.log("Server is listening on port " + PORT);