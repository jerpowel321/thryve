var db = require("../models");

module.exports = {
  findAllFood: function (req, res) {
    console.log("Preparing all foods");
    db.Foods.find({})
      .then(function (result) {
        res.json(result)
      })
      .catch(function (err) {
        console.log(err)
      });
  },
  findCertainFoodByWeight: function (req, res) {
    console.log("Finding certain foods by weight")
    db.Foods.find({
      "weight": req.params.weight
    })
      .then(function (result) {
        res.json(result)
      })
      .catch(function (err) {
        console.log(err)
      });
  },
  findCertainFoodByProtein: function (req, res) {
    console.log("Finding certain foods by protein", req.params.protein.toString())
    var gram = req.params.protein.toString();
    console.log(gram);

    // var criteria = {$and:[{"nutrients.nutrient_id": '203'},
    //                       {"nutrients.gm": gram}]};
    // db.Foods.find(criteria)
 
   // db.Foods.find({"nutrients.nutrient_id": "203"}.and: [{"nutrients.gm": gram}]);
    // db.inventory.find( { $and: [ { price: { $ne: 1.99 } }, { price: { $exists: true } } ] } )
   // db.Foods.find( {$and: [{"nutrients.nutrient_id": "203"}, {"nutrients.gm": gram}]})
    db.Foods.find({"nutrients.nutrient_id": "203", "nutrients.gm": gram})
      db.Foods.find({
        "nutrients.nutrient_id": "203",
      })
      .and({"nutrients.gm": gram})
    .then(function (result) {
        res.json(result)
      })
      .catch(function (err) {
        console.log(err)
      });
  },
  findCertainFoodByFat: function (req, res) {
    console.log("Finding certain foods by fat", req.params.fat.toString())
    var gram = req.params.fat.toString()
    db.Foods.find({
      "nutrients.nutrient_id": "204",
      "nutrients.gm": gram
    })
      .then(function (result) {
        res.json(result)
      })
      .catch(function (err) {
        console.log(err)
      });
  },
  findCertainFoodByCarbs: function (req, res) {
    console.log("Finding certain foods by carbs", req.params.carbs.toString())
    var gram = req.params.carbs.toString()
    db.Foods.find({
      "nutrients.nutrient_id": "205",
      "nutrients.gm": gram
    })
      .then(function (result) {
        res.json(result)
      })
      .catch(function (err) {
        console.log(err)
      });
  },
  findCertainFoodBySugar: function (req, res) {
    console.log("Finding certain foods by sugar", req.params.sugar.toString())
    var gram = req.params.sugar.toString()
    db.Foods.find({
      "nutrients.nutrient_id": "269",
      "nutrients.gm": gram
    })
      .then(function (result) {
        res.json(result)
      })
      .catch(function (err) {
        console.log(err)
      });
  },
  findCertainFoodByPFCS: function (req, res) {
    console.log("Finding certain foods by protein, fat, carbs and sugars")
    // if (req.params.protein === null || req.params.protein === undefined){
    //     var protein = "0"
    // } 
    // else {
    // var protein = req.params.protein.toString()
    // }
    // if (req.params.fats === null || req.params.fats === undefined){
    //     var fats = "0"
    // } 
    // else {
    // var fats = req.params.fats.toString()
    // }
    // if (req.params.carbs === null || req.params.carbs === undefined){
    //     var carbs = "0"
    // } 
    // else {
    // var carbs = req.params.carbs.toString()
    // }
    if (req.params.sugar === null || req.params.sugar === undefined){
        var sugar = "0"
    } 
    else {
    var sugar = req.params.sugar.toString()
    }
    // var protein = req.params.protein
    // var carbs = req.params.carbs
    // var fats = req.params.fats
    // var sugar = req.params.sugar
      console.log("andonasiondoinasd",sugar)
    db.Foods.find({
      // $and: [ 
      // { "nutrients.nutrient_id": "203", "nutrients.gm": { $gte: "10" } },
      //  { "nutrients.nutrient_id": "204", "nutrients.gm": { $gte: "10" } },
      //  { "nutrients.nutrient_id": "205", "nutrients.gm": { $gte: "10" } },
       "nutrients.nutrient_id": "269", "nutrients.gm":   sugar 
    // ]
  })
      .then(function (result) {
        res.json(result)
      })
      .catch(function (err) {
        console.log(err)
      });
  },
  deleteAllFood: function (req, res) {
    console.log("Deleting All Food")
    db.Foods.deleteMany({})
      .then(function (result) {
        res.json(result)
      })
      .catch(function (err) {
        console.log(err)
      });
  },
  findOneFood: function (req, res) {
    console.log("Find one Food");
    db.Foods.findOne(
      { "ndbno": req.params.id }
    )
      .then(function (result) {
        res.json(result)
      })
      .catch(function (err) {
        console.log(err)
      });
  },
  deleteFood: function (req, res) {
    console.log("Deleting Food")
    db.Foods.deleteOne(
      { "ndbno": req.params.id }
    )
      .then(function (result) {
        res.json(result)
      })
      .catch(function (err) {
        console.log(err)
      });
  }

}



// db.Foods.find({
//     $and : [
//         { $or : [{"nutrients.nutrient_id": "203", "nutrients.gm": {$gt: protein}}]},
//         { $or : [{"nutrients.nutrient_id": "204", "nutrients.gm": {$gt: fats}}]},
//         { $or : [{"nutrients.nutrient_id": "205", "nutrients.gm": {$gt: carbs}}]},
//         { $or : [{"nutrients.nutrient_id": "269", "nutrients.gm": {$gt: sugar}}]},
//     ]
// })