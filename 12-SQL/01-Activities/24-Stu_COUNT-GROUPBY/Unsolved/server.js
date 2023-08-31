// import express and mysql
const express = require('express');
const mysql = require('mysql2');

// initiates port and express
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connects to mysql database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Code2023!',
    database: 'books_db'
  },
  console.log(`Connected to the books_db database.`)
);

// querys database with a function that shows how many of the favorite groups are in stock
// as a count.
db.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, results) {
  console.log(results);
});

// query the database off of sum, max, min, average, from every section of favorite_books.
db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, results) {
  console.log(results);
});

// if not found ends.
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
