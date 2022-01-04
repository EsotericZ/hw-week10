const inquirer = require('inquirer');
const fs = require('fs');
let manager = [];
let engineers = [];
let interns = [];


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
    manager = [answers.manager, answers.managerID, answers.managerEmail, answers.managerOffice];
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
      answers.addTeam === 'Engineer' ? engineer() : 
      answers.addTeam === 'Intern' ? intern() : 
      fullTeam();
    })
};

const engineer = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: "Engineer's Name",
        name: 'engineer',
      },
      {
        type: 'input',
        message: "Engineer's Employee ID",
        name: 'engineerID',
      },
      {
        type: 'input',
        message: "Engineer's Email Address",
        name: 'engineerEmail',
      },
      {
        type: 'input',
        message: "Engineer's GitHub Username",
        name: 'engineerGitHub',
      },
    ])
    .then(answers => {
      let newEng = [answers.engineer, answers.engineerID, answers.engineerEmail, answers.engineerGitHub];
      engineers.push(newEng);
      team();
    });
};

const intern = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: "Intern's Name",
        name: 'intern',
      },
      {
        type: 'input',
        message: "Intern's Employee ID",
        name: 'internID',
      },
      {
        type: 'input',
        message: "Intern's Email Address",
        name: 'internEmail',
      },
      {
        type: 'input',
        message: "Intern's School",
        name: 'internSchool',
      },
    ])
    .then(answers => {
      let newInt = [answers.intern, answers.internID, answers.internEmail, answers.internSchool];
      interns.push(newInt);
      team();
    });
};

const fullTeam = () => {
  console.log('Manager Info', manager)
  console.log('Engineers Info', engineers)
  console.log('Interns Info', interns)
}