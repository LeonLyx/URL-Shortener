var mysql = require('mysql');
var ENV = require('../env');

var connectionPool = mysql.createPool({
    connectionLimit : 10,
    host : ENV.DB_HOST,
    user : ENV.DB_USER,
    password : ENV.DB_PASS,
    database : ENV.DB_NAME,
});

module.exports = connectionPool