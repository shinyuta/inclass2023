var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

function handleFormSubmit(evt) {
    evt.preventDefault()
    // get input
    var shoppingItem = $('input[name=shopping-input]').val()

    // window.alert(shoppingItem)

    if (!shoppingItem) {
        return
    }

    shoppingListEl.append('<li>' +shoppingItem+ '</li>')

}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission

shoppingFormEl.on('submit', handleFormSubmit)