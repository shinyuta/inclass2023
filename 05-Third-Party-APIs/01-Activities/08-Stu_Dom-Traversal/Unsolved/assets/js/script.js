// Assemble: Create/select DOM elements
var rootEl = $('#root');

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.
rootEl.children().children('li').css('background-color','white')

// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning
rootEl.children().children('.item-a3').append('O')

rootEl.children().children('.item-a1').append('O')