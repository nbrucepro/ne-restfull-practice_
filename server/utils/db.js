const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'NBruce',
    password: 'Mysql55%%',
    database: 'ne_restdb',
    
});

module.exports = connection;
