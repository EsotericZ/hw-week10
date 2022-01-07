const inquirer = require('inquirer');
const fs = require('fs');
let teamAwesome = [];

const Team = require('./src/Team');
const Manager = require('./lib/Manager'); 
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
    const manager = new Manager(answers.manager, answers.managerID, answers.managerEmail, answers.managerOffice);
    teamAwesome.push(manager);
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
      const engineer = new Engineer(answers.engineer, answers.engineerID, answers.engineerEmail, answers.engineerGitHub);
      teamAwesome.push(engineer);
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
      const intern = new Intern(answers.intern, answers.internID, answers.internEmail, answers.internSchool);
      teamAwesome.push(intern);
      team();
    });
};

const fullTeam = () => {
  let guess = Team(teamAwesome);
  console.log('try', guess);
}