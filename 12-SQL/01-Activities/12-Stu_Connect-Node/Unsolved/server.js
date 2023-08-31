// import express and mysql
const express = require('express');
const mysql = require('mysql2');

// set up port and app.
const PORT = process.env.PORT || 3001;
const app = express();

// bring in middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connects server.js to mysql database
const db = mysql.createConnection(
  // host, user, mysql password, and database name shown in schema.sql
  {
    host: 'localhost',
    user: 'root',
    password: 'Code2023!',
    database: 'classlist_db'
  },
  console.log(`Connected to the classlist_db database.`)
);

// querys the database and selects all from the database and console logs the results
db.query('SELECT * FROM students', function (err, results) {
  console.log(results);
});

// default response for any other request
app.use((req, res) => {
  res.status(404).end();
});

// start server on port and console log port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
