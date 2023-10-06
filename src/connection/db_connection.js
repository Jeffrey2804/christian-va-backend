var mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "cva"
  });

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("Select * From user", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});