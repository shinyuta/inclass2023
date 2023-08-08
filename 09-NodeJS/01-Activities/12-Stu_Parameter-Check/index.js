console.log(process.argv);

const var1 = process.argv[2];
console.log(var1);

const var2 = process.argv[3];
console.log(var2);

const truefalse = function() {
    const var1 = process.argv[2];
    const var2 = process.argv[3];

    if (var1 != var2) {
        return console.log(false);
    } else if (var1 === var2) {
        return console.log(true);
    } else {
        return console.log('something went wrong');
    }
};

console.log(truefalse())

// if (var1 != var2) {
//     return console.log(false);
// } else if (var1 === var2) {
//     return console.log(true);
// } else {
//     return console.log('something went wrong');
// }

