// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require ('./utils/generateMarkdown')
const fs = require('fs')
const path = require('path')



// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'install',
    message: 'What command do you need to install dependencies?',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please describe your project',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command do you need to run tests?',
    default: 'npm run test'

  },
  {
    type: 'input',
    name: 'usage',
    message: "Is there any information that the user should know when using your repo?",
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'What are the guidelines for contributing to the repo?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select a licesense that applies to your project.',
    choices: ['MIT', 'GPL 3.0', 'APACHE 2.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
  },
 ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', generateMarkdown({... answers}))
    })
}

// Function call to initialize app
init();
