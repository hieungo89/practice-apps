const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'checkout',
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS accounts ( \
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, \
        session_id VARCHAR(100), \
        firstname VARCHAR(15), \
        lastname VARCHAR(15), \
        email VARCHAR(50), \
        password VARCHAR(15), \
        address1 VARCHAR(40), \
        address2 VARCHAR(40), \
        city VARCHAR(20), \
        state CHAR(15), \
        zipcode VARCHAR(10), \
        phone VARCHAR(10), \
        cardname VARCHAR(40), \
        cardnumber VARCHAR(20), \
        expiredate VARCHAR(5), \
        cvv VARCHAR(5), \
        billing VARCHAR(10) \
        )"
    )
  )
  .catch((err) => console.log(err));

module.exports = db;
