const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?'
    },
    {
        type: 'input',
        name: 'contents',
        message: 'What is your project table of contents?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the use of for your project?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What is the license for your project?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can other developers contribute to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are some ways to run test on your application?'
    }

])
.then(function(data) {
    
    fs.writeFile('README.md',`${generateMarkdown(data)}`, (error) => {
        error ? console.log(error) : console.log("README.md file is successfully created!")
    })
})

// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();