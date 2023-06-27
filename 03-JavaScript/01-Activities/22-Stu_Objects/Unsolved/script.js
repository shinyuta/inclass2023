//WRITE YOUR CODE BELOW
var customerDrink = {
    name: "Coffee",
    sugars: 8,
    ready: true,
}
// log the name and sugars in the console
console.log(customerDrink.name)
console.log(customerDrink.sugars)

// if ready is true, false or neither, output a phrase to the console
if (customerDrink.ready == true) {
    // console.log("The drink is ready!")
    console.log("Ready to pickup a " + customerDrink.name + " with " + customerDrink.sugars + " sugars.")
} else if (customerDrink.ready == false) {
        console.log("Still in order queue")
} else {
    console.log("The drink is being prepared")
}