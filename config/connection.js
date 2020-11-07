const mysql = require('mysql2');
let connection;

if (process.env.NODE_ENV === 'production') {
  connection = mysql.createConnection(process.env.JAWSDB_URL).promise();
} else {
  console.log(`Connecting to local Server -> DB`);
  connection = mysql
    .createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'strengthApp_db',
    })
    .promise();
}
module.exports = connection;
