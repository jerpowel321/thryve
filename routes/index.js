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
  
  };

