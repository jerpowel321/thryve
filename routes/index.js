var controller = require("../controllers")
//var db = require("../models")


//-------------- Routes ----------------------------//

module.exports = function (app) {
    // Post something to the front page
    app.get("/", function (req, res) {
      console.log("I hit the '/' route");
      res.send("Welcome to the food API!");
    });
    // find all Food
    app.get("/foods", function (req, res) {
      controller.findAllFood(req, res);
    })
    // delete all Food
    app.get("/foods/delete", function (req, res) {
      controller.deleteAllFood(req, res);
    })
     // find one
    app.get("/foods/:id", function (req, res) {
      controller.findOneFood(req, res);
    })

    // find one & delete
    app.get("/foods/delete/:id", function (req, res) {
      controller.deleteFood(req, res);
    })
  };

