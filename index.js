var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();

const PORT = process.env.PORT || 3000;

app.get("/", function(req, res) {
  res.send("Welcome to Pizza is Life!")
});

app.get("/pizza", function(req, res) {
    res.json ({
        name: "Pizza",
        bestFodd: true
    })
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  