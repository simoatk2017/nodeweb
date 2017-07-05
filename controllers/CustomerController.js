var mysql      = require('mysql');
(function (CustomerController) {
var dbconfig = require('../config/database.js');

// Utilisation de la méthode
// « find » du modèle pour
// récupérer tous les
// documents de la
// collection
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



// exports.create = function (req, res) {
// var newPerson = new Person({ name: '', twitter: '' });
// res.render('person.new.ejs', { person: newPerson });
// };

// exports.doCreate = function (req, res) {
// var entry = new Person({ name: req.body.name, twitter: req.body.twitter });
// entry.save();
// //Ajout d’un nouveau document.
// res.redirect(301, '/people');
// };
// // Récupération des valeurs de
// // formulaire grâce au module « body-

// exports.edit = function (req, res) {
// // parser »
// var query = Person.findOne({ _id: req.params.id });
// query.exec(function (err, result) {
// res.render('person.edit.ejs', { person: result });
// });
// };

// exports.doEdit = function (req, res) {
// Person.update({ _id: req.body.id }, { $set: { name: req.body.name, twitter:
// req.body.twitter } }, function (err) {
// if (!err) {
// Utilisation de la méthode « update »
// res.redirect(301, '/people');

// //du modèle pour modifier un
// }
// //élément, le premier paramètre
// });
// //représente la condition de sélection
// };
// exports.delete = function (req, res) {
// // (ici sélection de l’élément par l’id).
// Person.remove({ _id: req.params.id }, function (err) {
// if (!err) {
// //$set sert à modifier les éléments
// res.redirect(301, '/people');
// }
// });
// //Suppression du document avec la méthode « remove »
// };
//du modèle auquel on passe une condition de sélection
})(module.exports);