var express = require("express");
var app = express();
const PORT = 8080;
const sqlite3 = require("sqlite3");

// Set the view engine to ejs
app.set("view engine", "ejs");

// Index page
app.get("/", function(req, res) {
  let db = new sqlite3.Database('./spellenwinkel.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    db.all(`SELECT * FROM games`, [], (err, rows) => {
      res.render("Pages/GameList");
    });
  });
});

// Run server
app.listen(PORT);
console.log("Server is listening on port " + PORT);