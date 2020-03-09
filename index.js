const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var db = require ("./models");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/node-react-starter`);

app.use(bodyParser.json());

app.get("/", function(req, res) {
    db.Foods.find({})
        .then(function(dbFoods) {
            var hbsObj = {
                data: dbFoods
            }
            console.log(hbsObj);
            // If we were able to successfully find Foodss
            // render the page with the data
            res.render("index", hbsObj);
        })
        .catch(function(err) {
            // If an error occurred, log it
            console.log(err);
        })
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});

