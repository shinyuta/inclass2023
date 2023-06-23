// TODO: Declare variable 'shout' with the value 'Shout' so it's available to `justShout` and `shoutItAllOut` functions
// added following line. Variable outside of the function
var shout = "Shout"

function justShout() {
  console.log(shout + ", " + shout);
  return;
}

function shoutItAllOut() {
  console.log(shout + " it all out! ");
  return;
}

justShout();
shoutItAllOut();

// TODO: Declare variable 'animal' with the value 'Tigers' so it is only available to the 'sayTigers' function
function sayLions() {
  var animal = "Lions"; 
  console.log(animal);
  return;
}

function sayTigers() {
  // added following line. variable declared inside the function
  var animal = "Tigers";
  console.log("and " + animal + " and "); 
  return;
}

// TODO: The variable 'bears' should only declared once and 'sayBears' should return "Bears! OH MY!". 
var bears = "Bears";

function sayBears() {
    // var bears = "Pandas";
    // declared bears variable once in the console.log
    console.log(bears='Bears' + "! OH MY!");
    return;
}

sayLions();
sayTigers();
sayBears();

// TODO: The variable 'sing' should be declared once in the local scope.
// var sing = "Sing"; 

function singAlong() {
  var sing = "Sing"; 
  console.log(sing + ",");
  var singASong = function () {
    console.log(sing + " a Song.");
  };
  singASong();
}

singAlong();


// bonus
// What is lexical scope?
// Lexical scope means the location where something is defined (not just called)

// function getName() {
//   const myName = "Oluwatobi";
//   return myName;
// }

// in this example, myName's lexical scope is the function getName() (getName()'s local environment)
// in other words getName() is myName's definition space