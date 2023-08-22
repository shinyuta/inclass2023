// TODO: Import express
const express = require('express');

const PORT = 3001;

// TODO: Import 'terms.json' file
const terms = require('./terms.json')

// TODO: Initialize app variable
const app = express();

// TODO: Create a route for a GET request that will return the content of our `terms.json` file

app.get('/', (req, res) => {
  res.send(
    `<p>API - An application programming interface, is a computing interface that defines interactions between multiple software intermediaries</p>`
  );
});

app.get('/TermsJson', (req, res) => {
  res.json({
    terms
  })
})

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
