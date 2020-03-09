var express = require("express")
var router = express.Router();



//-------------- View Foods ----------------------------//
router.get("/api/foods", function(req, res) {
    eventControllers.viewFoods(req, res);
})


module.exports = router;