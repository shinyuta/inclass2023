const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema` for the subdocument
const bookSchema = new mongoose.Schema({
  title: {type: String, required: true},
  price: {type: Number, required: true},
})

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  books: [bookSchema],
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`
const Library = mongoose.model('Library', librarySchema);

const bookData = [
  { title: 'hunger games', price: 25 },
  { title: 'Oshi No Ko', price: 11 }
]

// TODO: Create a new instance of the model including the subdocuments
Library
  .create({ name: 'The Best Library', books: bookData})
  .then(data => console.log(data))
  .catch(err => console.error(err));

module.exports = Library;
