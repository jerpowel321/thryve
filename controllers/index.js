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
    }
}