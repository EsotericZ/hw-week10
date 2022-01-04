const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: "Manager's Name",
      name: 'manager',
    },
    {
      type: 'input',
      message: "Manager's Employee ID",
      name: 'managerID',
    },
    {
      type: 'input',
      message: "Manager's Email Address",
      name: 'managerEmail',
    },
    {
      type: 'input',
      message: "Manager's Office Number",
      name: 'managerOffice',
    },
  ])
  .then(answers => {
    console.log(answers);
    team();
});

const team = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Who would you like to add to your team?',
        choices: [
          'Engineer',
          'Intern', 
          'None', 
        ],
        name: 'addTeam',
      }
    ])
    .then(answers => {
      console.log(answers)
      answers.addTeam === 'Engineer' ? engineer() : 
      answers.addTeam === 'Intern' ? intern() : console.log('Finished');
    })
};

const engineer = () => {
  console.log('You chose engineer')
  team();
};

const intern = () => {
  console.log('You chose intern')
  team();
};