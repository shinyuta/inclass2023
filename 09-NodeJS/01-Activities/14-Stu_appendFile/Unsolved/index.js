// TODO: What are we importing?
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log('Commit logged!')
  // if there is an error console.log (err = true), else if err = false, console.log('commit logged!')
);

// creates a quote with the process.argv[2] and a new line. the appendfile and newline make it easier to read the file

