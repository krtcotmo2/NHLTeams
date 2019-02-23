let express = require('express');
const path = require("path");

let router = express.Router();

router.get("/", function(req, res){
     res.render("index", {title:"NHL Site"});
})

module.exports = router;