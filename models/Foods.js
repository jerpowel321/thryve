var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({
    ndbno: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    measure: {
        type: String,
        required: true,
        default: false
    },
    nutrients: [
    {
        nutrient_id: {
            type: String,
            default: "221"
        },
        nutrient: {
            type: String,
            default: "Alcohol, ethyl"
        },
        unit: {
            type: String,
            default: "g"
        },
        value: {
            type: String
        },
        gm: {
            type: String
        }
    },
    {
        nutrient_id: {
            type: String,
            default: "203"
        },
        nutrient: {
            type: String,
            default: "Protein"
        },
        unit: {
            type: String,
            default: "g"
        },
        value: {
            type: String
        },
        gm: {
            type: String
        },
    },
    {
        nutrient_id: {
            type: String,
            default: "204"
        },
        nutrient: {
            type: String,
            default: "Total lipid (fat)"
        },
        unit: {
            type: String,
            default: "g"
        },
        value: {
            type: String
        },
        gm: {
            type: String
        }
    },
    {
        nutrient_id: {
            type: String,
            default: "205"
        },
        nutrient: {
            type: String,
            default: "Carbohydrate, by difference"
        },
        unit: {
            type:String,
            default: "g"
        },
        value: {
            type: String
        },
        gm: {
            type: String
        }
    },
    {
        nutrient_id: {
            type: String,
            default: "269"
        },
        nutrient: {
            type: String,
            default: "Sugars, total"
        },
        unit: {
            type:String,
            default: "g"
        },
        value:{
            type: String
        },
        gm: {
            type: String
        }
    },
    {
        nutrient_id: {
            type: String,
            default: "207"
        },
        nutrient: {
            type: String,
            default: "Ash"
        },
        unit: {
            type: String,
            default: "g"
        },
        value: {
            type: String
        },
        gm: {
            type: String
        }
    },
    {
        nutrient_id: {
            type: String,
            default: "208"
        },
        nutrient: {
            type: String,
            default: "Energy"
        },
        unit: {
            type: String,
            default: "kcal"
        },
        value: {
            type: String
        },
        gm: {
            type: String
        }
    },
    {
        nutrient_id: {
            type: String,
            default: "291",
        },
        nutrient: {
            type: String,
            default: "Fiber, total dietary"
        },
        unit: {
            type: String,
            default: "g"
        },
        value: {
            type: String
        },
        gm: {
            type: String
        }
    }
    ]
});

var Foods = mongoose.model("Foods", schema);
module.exports = Foods;

console.log("This page is hit.")
console.log("=============================")


// The following code was used to add the initial json foods data into mongo

// const fs = require('fs');
// fs.readFile('food_data.json' , (err, data) => {
//     if (err) throw err;
//     let foods = JSON.parse(data);

//     foods.report.foods.forEach(function(foodItem){
//         var food = new Foods(foodItem);
//         food.save(function (err, food) {
//         if (err) return console.error(err);
//         console.log(food.name + " saved to Food collection.");
//     });
//     });

//     console.log(foods);
// });







