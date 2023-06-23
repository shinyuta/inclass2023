var students = ["Ay", "Bee","Cee","Dee"]

console.log(students.length)
// log the arrays length

console.log("Welcome to class "+students[0])
console.log("Welcome to class "+students[1])
console.log("Welcome to class "+students[2])
console.log("Welcome to class "+students[3])
// log all the students 1-4 (0,1,2,3)

students[0] = "New"
// replaced first student with new student

if (students[0] !== "Ay") {
    console.log(students[0]+ " is in class.")
}
// if student 1 is not 'ay' log in the console the new student

// Bonus
// How could you use the array's length property to access the last element in an array of any length?

// subtract 1 from the length given in the console to access elements in the array (specifically the last) 
// (it starts at 0)