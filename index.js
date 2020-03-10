const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var db = require ("./models");


const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/node-react-starter`);

app.use(bodyParser.json());


require("./routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});


// Enable CORS to prevent access issues in different browsers.
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
//     res.header('Access-Control-Allow-Origin', 'true');
//     res.header('Access-Control-Allow-Origin', 'Origin, X-Requested-With, Content-Type, Accept');
//     res.header('Access-Control-Allow-Origin', 'GET, POST, OPTIONS, PUT DELETE');
//     next();
//   });