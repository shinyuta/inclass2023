const grades = [56, 78, 99, 85];

// TODO: Complete the 'findAverage' function below.
function findAverage(accumulator, currentValue, index, array) {

// check to see if we are the end of the given array
    if (index === array.length -1) {
// once we have reached the end of the array we divide by how many elements are in the given array
        return (accumulator + currentValue) / array.length;
    }
    
// return the current value to our total
    return accumulator + currentValue;
}

// TODO: Pass the 'findAverage' into the reduce method.
let gradeAverage = grades.reduce(findAverage);

console.log(gradeAverage);
