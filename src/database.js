const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'mysql',
  user: 'dbuser',
  password: 'dbpass',
  database: 'dbnode',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
