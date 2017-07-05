var express = require('express');
var app = express();
var mysql      = require('mysql');
var things = require('./routes/customers.js');


console.log('route::::: ' + things ) ;

//both index.js and things.js should be in same directory
app.use(things);

// app.get('/', function(req, res, next) {
//   var test = 33 ;
//   if(test > 3){
//   var error = new Error('My Error occurred');
//   error.status = 404;
//   next(error);
// }
// else
// res.send("Good job") ;
// });

//app.use(logHandler);
app.use(errorHandler);

// logger middleware
// function logHandler(err, req, res, next) {
//   console.error('[' + new Date() + ']\n' + err.stack);
//   next(err);
// }

var test = 44 ;

var eventEmitter = require('events').EventEmitter;
var myEvent = new eventEmitter();
myEvent.on('myEventEmittted', function (message) {
console.log(message);
});


if(test < 5) {
myEvent.emit('myEventEmittted', 'connection done succefull;');

}




var dbconfig = require('./config/database.js');

console.error('password \n' + dbconfig.password);

// error handler middleware
function errorHandler(err, req, res, next) {
  res.status(err.status || 404);
   console.error('[' + new Date() + ']\n' + err.status);
  res.send("kokko  " + err.message || 'Error!!');
}

app.listen(3000, function() {
  console.log('Express server listening on port ' + 3000);
});