const fs = require('fs');
const inquirer = require('inquirer');

// used destructuring below instead of response and response.object
const getMarkup = ({name, city, github, linkedIn}) => (`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${name}</h1>
      <p class="lead">I am from ${city}.</p>
      <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${github}</li>
        <li class="list-group-item">LinkedIn: ${linkedIn}</li>
      </ul>
    </div>
  </header>
</body>
</html>
`)

// .prompt takes an array of objects, that inquirer is looking for. typename, message.
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'what is your name?',
    },
    {
        type: 'input',
        name: 'city',
        message: 'where were you born?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'what is your github username?',
    },
    {
        type: 'input',
        name: 'linkedIn',
        message: 'what is your linkedin?',
    },
]).then((response) => {
    console.log(response);
    const markup = getMarkup(response)
    fs.writeFile('index.html', markup, (err) => {
        err ? console.error(err) : console.log('success!')
    })
})

// for mockup (hardcoding first)
// const markup = getMarkup({
//     name: 'Yuta',
//     city: 'Seattle',
//     github: 'shinyuta',
//     linkedIn: 'shinyuta',
// })

// write to file
// fs.writeFile('index.html', markup, (err) => {
//     err ? console.error(err) : console.log('success!')
// })


