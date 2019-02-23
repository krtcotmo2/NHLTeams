let express = require('express');
const path = require("path");

let router = express.Router();

router.get("/", function(req, res){
     res.render("index", {title:"NHL Team Site"});
})

router.get("/team/:id", function(req, res){
     console.log(req.params.id);
     res.render("team")

})
module.exports = router;