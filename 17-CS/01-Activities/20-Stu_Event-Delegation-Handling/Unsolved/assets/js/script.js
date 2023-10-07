const buttons = document.getElementsByTagName('button');

const clickHandler = function () {
// TODO: Add a comment describing the purpose of this variable.
// creates a variable that will be used in the return function to change the text content
  let count = 0;

  // TODO: Add a comment describing what is happening. 
  // returns a function that creates a closure
  return function () {
  
  // TODO: Add a comment describing how this variable is being scoped. 
  //  this variable is being scoped via the function scope (local).
    count++;
  // TODO: Add a comment describing how we are using the 'count' variable.
  //  increments for every click, changes the text content for every click.
    this.textContent = `Clicks: ${count}`;
  };
};

// TODO: Add a comment describing the purpose of this loop.
// for each button attach event listener to it (click, and clickhandler())
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickHandler());
}
