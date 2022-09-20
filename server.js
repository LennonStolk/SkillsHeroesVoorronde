var express = require("express");
var app = express();
const PORT = 8080;
const sqlite3 = require("sqlite3");

// Set the view engine to ejs
app.set("view engine", "ejs");

app.use(express.static('views'));

// Index page
app.get("/", function(req, res) {
  let db = new sqlite3.Database('./spellenwinkel.db', sqlite3.OPEN_READWRITE, (err) => {

    if (err) {
      console.error(err.message);
    }

    // Render page with games from database
    db.all(`SELECT * FROM games`, [], (err, rows) => {
      res.render("Pages/GameList", { rows });
    });

  });
});

// Game details page
app.get("/game/:gameId", function(req, res) {
  let db = new sqlite3.Database('./spellenwinkel.db', sqlite3.OPEN_READWRITE, (err) => {

    if (err) {
      console.error(err.message);
    }

    // Render page with details of specific game
    db.all(`SELECT * FROM games WHERE id = ?`, [req.params.gameId], (err, rows) => {
      res.render("Pages/Game", { rows });
    });

  });
});

// Run server
app.listen(PORT);
console.log("Server is listening on port " + PORT);