const express = require("express");
const log = console.log;
const app = express();
const routes = require("./routes/routes");
let PORT  = process.env.PORT || 3000;
let exphbs = require("express-handlebars");

require("./connection");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", express.static(__dirname + "/"));
app.use("/", routes);
app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.listen(PORT, function(err){
     if(err) throw err;
     log("listening on", PORT);
})


