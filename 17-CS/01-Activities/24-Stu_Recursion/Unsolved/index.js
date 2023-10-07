// TODO: Add a comment describing what the `position` parameter means for this function.
// position is the number on the fibonacci sequence (like the index)
const fibonacci = (position) => {
  // TODO: Add a comment describing the purpose of this conditional statement.
  // if the position is less than 2 return the number because fibonacci sequence
  // starts with 0, 1
  if (position < 2) {
    return position;
  }

  // TODO: Add a comment describing the purpose of this return statement.
  // goes through the sum of the 2 preceding numbers
  return fibonacci(position - 1) + fibonacci(position - 2);
};

// TODO: What will this return?
// this will return 34. Basically you are adding a lot of 1s.
console.log(fibonacci(9));
