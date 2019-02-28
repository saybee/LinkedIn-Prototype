var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 100,
    port: '3306',
    // host: '',//host details
    // user: '',//User details
    // password: '',
    // database: ''//db name
})


module.exports = pool;