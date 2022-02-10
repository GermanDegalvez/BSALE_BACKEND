// Conexion a la BD 

const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user     : 'bsale_test',
    password : 'bsale_test',
    database : 'bsale_test'
  });


   //Check connect
  connection.connect( error => {
    if ( error ) throw error;
    console.log('Database server running');
  })

  module.exports = connection;
