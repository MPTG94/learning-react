var mysql = require('mysql');

// Setup MySQL connection
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password1',
  database: 'cardb'
});

// Connecting to MySQL instance
connection.connect(function(err) {
  'use strict';
  if (err) {
    console.log("There was an error connecting to the DB:" + err);
  } else {
    console.log("Successfuly connected to DB, Connection ID:" +
      connection.threadId);
  }
});

module.exports = connection;
