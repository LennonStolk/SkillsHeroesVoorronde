var express = require("express");
var app = express();
const PORT = 8080;

// Includes bootstrap
app.use('/css', express.static(path.join(_dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(_dirname, 'node_modules/bootstrap/dist/js')))

// Set the view engine to ejs
app.set("view engine", "ejs");

// Index page
app.get("/", function(req, res) {
  res.render("Pages/GameList");
});

// Run server
app.listen(PORT);
console.log("Server is listening on port " + PORT);