const originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition. 
const doubledArray = originalArray.map(function(data) {
  // The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
  return data * 2;
});

console.log(doubledArray);
console.log(originalArray);


// TODO: Describe how map is working in the example below. What will the value of tripledArray be?
const tripledArray = originalArray.map(data => data * 3);
// the new array will be every number in the array multiplied by 3. so 3,9,6, etc.

console.log(tripledArray)

// TODO: Describe how map is working in the example below. What will the value of oddOrEven be?
const oddOrEven = originalArray.map(num => {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
});

// this map takes the original array and changes the values to even or odd.

console.log(oddOrEven)

// created some functions to test and learn

const divide = originalArray.map(num => num / 3);
console.log(divide)

const test = num => {
  for (let i = 1; i<num; i++) {
    if (num % 2 == 0) {
      return true;
    }
    else {
      return false;
    }
  }
}

const testconst = originalArray.filter(test);
console.log(testconst)