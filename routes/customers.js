var express = require('express');
var router = express.Router();

var CustomerController = require('../controllers/CustomerController.js');

router.get('/', function(req, res){
   
   CustomerController.getAll(req, res) ;
});
router.post('/', function(req, res){
  CustomerController.AddCustomer(req, res) ;
  
   //res.send('POST route on things.');
});

//export this router to use in our index.js
module.exports = router;

http://kbroman.org/github_tutorial/