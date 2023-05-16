/**
    GIVEN a command-line application that accepts user input
    WHEN I am prompted for information about my application repository
    THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    WHEN I enter my project title
    THEN this is displayed as the title of the README
    WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
    THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

    WHEN I choose a license for my application from a list of options
    THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    WHEN I enter my GitHub username
    THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    WHEN I enter my email address
    THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    WHEN I click on the links in the Table of Contents
    THEN I am taken to the corresponding section of the README
 */

// Packages needed for this application
// Connect node module to work with questions
const inquirer = require('inquirer');
// Connect node module to work with files
const fs = require('fs');
// console.log(inquirer);
// Connect my module to generate readme data 
const renerateMarkdown = require('./utils/generateMarkdown.js');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description (multiline)',
    },
    {
        type: 'input',
        name: 'intallation',
        message: `Enter project's installation instructions (multiline)`,
    },
    {
        type: 'input',
        name: 'contribution',
        message: `Enter project's contribution guidelines.`,
    },
    {
        type: 'input',
        name: 'tests',
        message: `Enter project's test instructions.`,
    }
    //,
    // {
    //     type: 'input',
    //     name: 'tests',
    //     message: `Enter project's test instructions.`,
    // }
];

/** This function initiate questions 
 * questions - parameter, array type, contains list of questions
*/
function askQuestions(questions) {
    const fileName = 'README.md';
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            writeToFile(fileName, answers);

        })
        .catch((error) => {
            console.error(error);
        });
        //return answers;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    const title = 'Your Project Title';

    const readmeTemplate = `
    # ${title}
    
    ## Description
    
    Write your project description here.
    
    ## Table of Contents
    
    - [Description](#description)
    - [Table of Contents](#table-of-contents)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    
    Write your installation instructions here.
    
    ## Usage
    
    Write about how to use your project here.
    
    ## License
    
    Specify your project's license information here.
    
    ## Contributing
    
    Provide guidelines for contributing to your project here.
    
    ## Tests
    
    Explain how to run tests for your project here.
    
    ## Questions
    
    If you have any questions, you can reach out to me at [your-email@example.com](mailto:your-email@example.com).`
    
    console.log(readmeTemplate);
    
    dataFile = JSON.stringify(data);
    fs.writeFile(fileName, readmeTemplate, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    console.log(`Welcome to the ReadMe generator!\nPlease follow the instructions:`);
    // console.log(renerateMarkdown.renderLicenseBadge('MIT'))
    let data = 'Write to file test';
    askQuestions(questions);

    // let fileName = 'README.md';
    // writeToFile(fileName, data);
}

// Function call to initialize app
init();
