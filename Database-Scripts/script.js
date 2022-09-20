const sqlite3 = require("sqlite3");

let db = new sqlite3.Database('./spellenwinkel.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    // db.run(`
    //   CREATE TABLE games(
    //     id INTEGER PRIMARY KEY, 
    //     name TEXT NOT NULL, 
    //     price DECIMAL(10,2) NOT NULL, 
    //     player_amount TEXT, 
    //     type TEXT, 
    //     ages TEXT, 
    //     img_src TEXT, 
    //     player_duration_minutes INTEGER
    //   )`
    // );
    db.run(`INSERT INTO games(id, name, price, player_amount, type, ages, player_duration_minutes, img_src) VALUES(1, "30 Seconds", 29.75, "3 tot 24", "Partyspel", "12 tot 99 jaar", 30, "30seconds.png"), (2, "Carcassone", 24.95, "2 tot 5", "Legspel", "7 tot 99 jaar", 35, "carcassone.png")`, [], function(err) {
      if (err) {
        return console.log(err.message);
      }
      // get the last insert id
      console.log(`A row has been inserted with rowid ${this.lastID}`);
    });
});