var a = "50";
var b = 50;
var c = 100;
var d = c % b;
var e = c / 2;

var expression1 = (b === e); // true
var expression2 = (e < d); // false 50 is larger than 0.

// Use comparison operators so all expressions below log to the console as true

console.log(a == b);
// originally === (exactly equal) but a is string and b is int. changed to == (both 50 but not exact)
console.log(b === e);
// originally b !== e (not equal) but b is 50 and e is also 50 so it is equal. Changed to == (or ===)
console.log(c > b);
// originally c < b but since c is 100 and b is 50. c is greater than b. Changed to c > b
console.log(d >= 0);
// originally d > 0 but since d is 0 (remainder of 100/50 is 0). Changed to d >= 0

// Use logical operators so all expressions below log to the console as true

console.log(expression1 || expression2);
// originally && but since expression 2 is false, changed to || (either one needs to be true). expression1 is true
console.log(!expression1 || !expression2);
// originally expression2. but since expression2 is false and !expression1 is also false. Changed to expression2 to
// !expression2 (making it true)
  
