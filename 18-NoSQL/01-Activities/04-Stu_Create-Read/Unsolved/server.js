const express = require('express');
// bringing in the mongodb package from npm.
const { MongoClient } = require('mongodb');

const app = express();
const port = 3001;

// connection string for mongo database (local)
const connectionStringURI = `mongodb://127.0.0.1:27017`;

// initialized new instance of mongoclient and calling it client.
const client = new MongoClient(connectionStringURI);

// declare a variable to hold the connection
let db;

// create variable to hold out database name.
const dbName = 'inventoryDB';

// method that connects to MongoDB server and starts localhost port. 
// if error, show error message
client.connect()
  .then(() => {
    console.log('Connected successfully to MongoDB');
    // use client.db() constructor to add new db instance.
    db = client.db(dbName);

    // starts express server
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error: ', err.message);
  });

// built in express function that parses incomes request to json.
app.use(express.json());

//  post requesto to create a single document to collection
app.post('/create', (req, res) => {
  // collection() defines or creates instance of collection, takes in
  // collection name
  // insertone() creates one document into collection. Takes in an object.
  db.collection('bookCollection').insertOne(
    { title: req.body.title, author: req.body.author }
  )
  // returns response as json
    .then(results => res.json(results))
  // handles errors.
    .catch(err => {
      if (err) throw err;
    });
});

// post request to create multiple documents to colelction
app.post('/create-many', (req, res) => {
  db.collection('bookCollection').insertMany(
    [
      { "title": "Oh the Places We Will Go!" },
      { "title": "Diary of Anne Frank" }
    ]
  )
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});

// get request to read all documents.
app.get('/read', (req, res) => {
  db.collection('bookCollection')
  // returns all documents
    .find({})
  // returns all documents in an array
    .toArray()
  // sends to json
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});
