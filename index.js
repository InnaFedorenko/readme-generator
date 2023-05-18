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
        message: 'Enter your project title.'
    },
    // {
    //     type: 'editor',
    //     name: 'description',
    //     message: `Write your project description here. (To start typing preess i. To quit the editor, press esc, them :wq keys combination.)`
    // },
    // {
    //     type: 'input',
    //     name: 'authors',
    //     message: `Enter the authors' names, separated by commas.`,
    // },
    // {
    //     type: 'input',
    //     name: 'github',
    //     message: `Add your GitHub username.`,
    // },
    // {
    //     type: 'input',
    //     name: 'video',
    //     message: `Add link to your video.`,
    // },
    // {
    //     type: 'editor',
    //     name: 'intallation',
    //     message: `Write your installation instructions here.`
    // },
    // {
    //     type: 'input',
    //     name: 'usage',
    //     message: `Write about how to use your project here. `
    // },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'Mozilla Public', 'Creative Commons','No License'],
      },
    // {
    //     type: 'input',
    //     name: 'contribution',
    //     message: `Provide guidelines for contributing to your project here. `
    // },
    // {
    //     type: 'input',
    //     name: 'tests',
    //     message: `Explain how to run tests for your project here.`,
    // },
    {
        type: 'input',
        name: 'email',
        message: `Add your email adress`,
    }
];

/** This function initiate questions 
 * questions - parameter, array type, contains list of questions
*/
function askQuestions(questions) {
    const fileName = 'README2.md';
    inquirer
        .prompt(questions)
        .then((answers) => {
            // console.log(answers);
            // console.log(fileName)
            writeToFile(fileName, answers);

        })
        .catch((error) => {
            console.error(error);
        });
    //return answers;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //Get ReadMe data
    const currentDate = new Date();
    const licenseSection = renerateMarkdown.renderLicenseSection(data.license)

    const readmeTemplate = `# ${data.title}
## Table of Contents
- [Description](#description)
- [Installation]( #installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions) 
## Description
- The ReadMe Generator Tool was developed by [${data.authors}](${data.guthub}).
- [GiHub Link](https://github.com/${data.github})
- [Video recordering]( ${data.video})
- Date: ${currentDate}
${data.description}
## Installation
${data.intallation}
## Usage
${data.usage} 
For more details prease review the video.
## License
${licenseSection}
## Contributing
${data.contribution}
## Tests
${data.tests}
## Questions
If you have any questions, you can reach out to [me](https://github.com/${data.github}) at 
[${data.email}](mailto:${data.email}).`

    // console.log(readmeTemplate);

    dataFile = JSON.stringify(data);
    fs.writeFile(fileName, readmeTemplate, (err) =>
        err ? console.log(err) : console.log('\x1b[33m%s\x1b[0m',`Thank you for the details.\nREADME.md file was succesfully created!`)
    );
}

// TODO: Create a function to initialize app
function init() {
    console.log(`Welcome to the ReadMe generator!\nPlease follow the instructions:`);
    // console.log(renerateMarkdown.renderLicenseBadge('MIT'))
    askQuestions(questions);

    // let fileName = 'README.md';
    // writeToFile(fileName, data);
}

// Function call to initialize app
init();
