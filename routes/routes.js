let express = require('express');
const path = require("path");
connection = require("../connection");
let router = express.Router();

router.get("/", function(req, res){
     connection.query("SELECT * FROM teams", function(err, data){
          if(err){
               res.status(404).statusCode("No Data found");
          }else{
               let eastTeams = data.filter( o => {return o.confID != 1});
               let westTeams = data.filter( o => {return o.confID == 1});
               res.render("index", {title:"NHL Team Site", eastTeams:eastTeams, westTeams:westTeams});
          }
          
     })


     
})

router.get("/team/:id", function(req, res){
     console.log(req.params.id);
     res.render("team")

})
module.exports = router;
