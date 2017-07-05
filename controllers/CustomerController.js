var mysql      = require('mysql');
(function (CustomerController) {
var dbconfig = require('../config/database.js');


var connection = mysql.createConnection(dbconfig);

exports.getAll = function (req, res) {
 connection.query('SELECT * from customer', function(err, rows) {
    if(err) throw err;

    console.log('The solution is: ', rows);
    res.json(rows);
  });
};

exports.AddCustomer = function (req, res) {

//var queryStr = "INSERT INTO cast (`name`, `portrait`, `role`, `bio`) VALUES ('" + data.name + "', '" + data.portrait + "', '" + data.role + "', '" + data.bio + "');";
var queryStr = "INSERT INTO customer('name', 'address', 'email', 'phone') VALUES ('Bandor','Hel 6H3 ','nom@yah.fi,234556444')" ;
 connection.query(queryStr, function(err, rows) {
    if(err) throw err;

    console.log('The solution is: ', rows);
    res.json(rows);
  });
};

})(module.exports);
