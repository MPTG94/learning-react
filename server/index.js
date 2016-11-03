'use strict';
// Adding NodeJS modules
var fileStreamRotator = require('file-stream-rotator');
var express = require('express');
var fs = require('fs');
var path = require('path');
var logger = require('morgan');

// Adding routers
var cars = require('./api/cars');
var companies = require('./api/companies');

// Initialize express
var app = express();
var logDirectory = path.join(__dirname, '../', 'log');

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// create a rotating write stream
var accessLogStream = fileStreamRotator.getStream({
  date_format: 'YYYYMMDD',
  filename: path.join(logDirectory, 'access-%DATE%.log'),
  frequency: 'daily',
  verbose: false
});

if (process.env.NODE_ENV == 'production') {
  // Production logger logs to a rotated file
  console.log("Production Env Is: " + app.get('env'));
  app.use(logger('combined', {stream: accessLogStream}));
  // Express only serves static assets in production
  var clientPath = path.join(__dirname, '../', 'client', 'build');
  console.log(`Static directories path is: ${clientPath}`);
  app.use(express.static(clientPath));
} else {
  // Development logger logs to console
  console.log("Development Env Is: " + app.get('env'));
  app.use(logger('dev'));
}

// Setting API routes
app.use('/api/cars', cars);
app.use('/api/companies', companies);

// Setting app listen on port 3000
app.listen(3001, function() {
  console.log('Example app listening on port 3001!');
});
