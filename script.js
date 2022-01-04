const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the description of the project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Are there installation instructions?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What is this project used for?',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'Choose the license type:',
      choices: [
        'Apache License 2.0',
        'Boost Software License 1.0', 
        'GNU AGPLv3', 
        'GNU GPLVv3',
        'GNU LGPLv3',  
        'ISC', 
        'Mozilla Public License 2.0',
        'MIT License',
        'The Unlicense'
      ],
      name: 'license',
    },
    {
      type: 'input',
      message: 'How do you test your project?',
      name: 'test',
    },
    {
    type: 'input',
    message: 'Are there any contributon guidelines for your project?',
    name: 'contribute',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'Email address for the contact me?',
      name: 'email',
    },
  ])
  .then(answers => {
    getLicense(answers);
  }
);