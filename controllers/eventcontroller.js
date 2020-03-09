var db = require("../models");

module.exports = {
    viewFoods: function (req, res) {
        db.Foods
            .findAll({})
            .then(function (result) {
                res.json(result)
            })
            .catch(function (err) {
                console.log(err)
            })
    }
}