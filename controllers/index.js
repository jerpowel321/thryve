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
    deleteAllFood: function (req, res) {
        console.log("Deleting All Food")
        db.Foods.deleteMany({})
        .then (function (result){
            res.json(result)
        })
        .catch(function (err){
            console.log(err)
        });
    },
    findOneFood: function (req, res) {
        console.log("Find one Food");
        db.Foods.findOne(
            {"ndbno": req.params.id}
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
            {"ndbno": req.params.id}
        )
        .then (function (result){
            res.json(result)
        })
        .catch(function (err){
            console.log(err)
        });
    }
}