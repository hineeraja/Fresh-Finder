const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'freshness',
    password: 'organic',
    database: 'inventory',
    waitForConnections: true,
    connectuionLimit: 10,
    queLimit: 0
});

const connection = pool.promise();

module.exports=connection;