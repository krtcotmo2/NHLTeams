require("dotenv").config();
let mySQL = require("mysql");
let sqlKeys = require("./keys");
let connection;
if (process.env.JAWSDB_URL) {
     connection = mySQL.createConnection(process.env.JAWSDB_URL);
} else {
     connection =  mySQL.createConnection(sqlKeys.sqlKeys);
}

connection.connect(function (err) {
     if (err) {
          console.error("error connecting: " + err.stack);
          return;
     }
     console.log("connected as id " + connection.threadId);
});

module.exports = connection;