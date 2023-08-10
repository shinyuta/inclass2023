const inquirer = require('inquirer');
const fs = require('fs')

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'username',
    },
    {
      type: 'list',
      message: 'What languages do you know?',
      name: 'languages',
      choices: ['English', 'Spanish', 'Mandarin', ]
    },
    {
      type: 'list',
      // checkbox doesn't write to txt file for some reason.
      message: 'what is your preferred method of communication?',
      name: 'communication',
      choices: ["texting", 'verbal', 'discord', 'email']
    },
  ])

  // .then((response) =>
  //   response.confirm === response.password
  //     ? console.log('Success!')
  //     : console.log('You forgot your password already?!')
  // );

  .then(function (response) {
    let data = response.username + " " + response.langauges + " " + response.communication;
    fs.writeFile('Output.txt', data, (err) =>  {
      if (err) throw err;
    })
  });
 
// check solved for json file.