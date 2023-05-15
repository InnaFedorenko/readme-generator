// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// console.log(inquirer);
const renerateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to the password generator! :-)");
    console.log(renerateMarkdown.renderLicenseBadge('MIT'))
}

// Function call to initialize app
init();
