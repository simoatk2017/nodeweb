var express = require('express');
var app = express();
var mysql      = require('mysql');
var customers = require('./routes/customers.js');

app.use(customers);
app.use(errorHandler);

// error handler middleware
function errorHandler(err, req, res, next) {
  res.status(err.status || 404);
   console.error('[' + new Date() + ']\n' + err.status);
  res.send("kokko  " + err.message || 'Error!!');
}

app.listen(3000, function() {
  console.log('Express server listening on port ' + 3000);
});
