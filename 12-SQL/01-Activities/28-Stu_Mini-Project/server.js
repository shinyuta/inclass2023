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
    database: 'movies_db'
  },
  console.log(`Connected to the movies_db database.`)
);

// lists all movies
app.get('/api/movies', (req, res) => {
    const sql = 'SELECT id, movie_name AS title FROM movies'

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({error: err.message})
            return
        }

        res.json({
            message: 'success', 
            date: rows
        })
    })
});

// post request adds movie when testing insomnia
app.post('/api/new-movie', (req, res) => {
    const sql = 'INSERT INTO movies (movie_name) VALUES (?)'
    const params = [req.body.movie_name]

    db.query(sql, params, (req, res) => {
        if (err) {
            res.status(400).json({error: err.message})
            return
        }
        
        res.json({
            message: 'success',
            data: req.body
        })
    })
});


// if not found ends.
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
