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
  // find all Food by weight
  app.get("/foods/weight/:weight", function (req, res) {
    controller.findCertainFoodByWeight(req, res);
  })
  // find all Food by protein
  app.get("/foods/protein/:protein", function (req, res) {
    controller.findCertainFoodByProtein(req, res);
  })
  // find all Food by fat
  app.get("/foods/fat/:fat", function (req, res) {
    controller.findCertainFoodByFat(req, res);
  })
      // find all Food by carbs
  app.get("/foods/carbs/:carbs", function (req, res) {
    controller.findCertainFoodByCarbs(req, res);
  })
  // find all Food by sugar
  app.get("/foods/sugar/:sugar", function (req, res) {
    controller.findCertainFoodBySugar(req, res);
  })
  // find all Food by protein, fat, carbs, sugar
  // app.get("/foods/:protein/:fat/:carbs/:sugar", function (req, res) {
      app.get("/foods/test/:sugar", function (req, res) {
    controller.findCertainFoodByPFCS(req, res);
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

