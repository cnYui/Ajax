const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  port: 3306,
  database: "mysql",
});

connection.connect((err) => {
  if (err) {
    console.log("err", err);
    return;
  }
  console.log("连接成功");

  // Query all data from mysql database
  connection.query('SELECT * FROM mysql.user', (err, results) => {
    if (err) {
      console.log("Query error:", err);
      return;
    }
    console.log("Query results:", results);
    
    // Close connection after query
    connection.end();
  });
});
