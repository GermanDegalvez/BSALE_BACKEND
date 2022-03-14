// Conexion a la BD 

const mysql = require('mysql');

var connection = mysql.createPool({
    host     : 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user     : 'bsale_test',
    password : 'bsale_test',
    database : 'bsale_test'
  });


    module.exports = connection;
