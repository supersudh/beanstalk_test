var express = require('express');
var morgan = require('morgan');

var app = express();
var server = require('http').Server(app);
port = process.env.PORT || 8080;

// Catch all other routes and return the index file
app.get('/', (req, res) => {
  res.send({ message: `up and running well in ${process.env.NODE_ENV}` });
});

// use morgan to log requests to the console
app.use(morgan('dev'));

server.listen(port);
console.log('App running AT port ~> ' + port);