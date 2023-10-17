const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: false},
    price: {type: Number, required: true}
})
 
// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function () {
    const discountPrice = this.price * 0.5
    console.log(`The books title is ${this.title} and this discounted price is ${discountPrice}`)
}

// TODO: Create a model named `Book`
const Book = mongoose.model('Book', bookSchema);

// TODO: Create a new instance of the model
const getInstanceDiscount = new Book({
    title: "oh the places you'll go",
    price: 100,
})

const getInstanceDiscount2 = new Book({
    title: "oh the places you'll go",
    price: 50,
})

// TODO: Call the custom instance method on the instance
getInstanceDiscount.getDiscount();
getInstanceDiscount2.getDiscount();

module.exports = Book;
