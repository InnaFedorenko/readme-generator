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

// Connect node module to work with questions
const inquirer = require('inquirer');
// Connect node module to work with files
const fs = require('fs');
// Connect module to work with data
const moment = require('moment');
// Connect my module to generate readme data 
const generateContent = require('./utils/generateMarkdown.js');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title.'
    },
    {
        type: 'editor',
        name: 'description',
        message: `Write your project description here. (To start typing press i. To quit the editor, press esc, them :wq keys combination.)`
    },
    {
        type: 'input',
        name: 'authors',
        message: `Enter the authors' names, separated by commas.`,
    },
    {
        type: 'input',
        name: 'github',
        message: `Add your GitHub username.`,
    },
    {
        type: 'input',
        name: 'video',
        message: `Add link to your video.`,
    },
    {
        type: 'editor',
        name: 'intallation',
        message: `Write your installation instructions here.`
    },
    {
        type: 'input',
        name: 'usage',
        message: `Write about how to use your project here. `
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'Creative Commons', 'No License'],
    },
    {
        type: 'input',
        name: 'contribution',
        message: `Provide guidelines for contributing to your project here. `
    },
    {
        type: 'input',
        name: 'tests',
        message: `Explain how to run tests for your project here.`,
    },
    {
        type: 'input',
        name: 'email',
        message: `Add your email adress`,
    }
];

// Function initiate questions 
function askQuestions(questions) {

    // Ask the questions and generate the README
    inquirer.prompt(questions).then(generateREADME);
}
// Function to generate README 
function generateREADME(data) {
    //Get ReadMe data
    const fileName = 'README.md';
    const currentDate = moment().format('MM-DD-YYYY');
    const licenseSection = generateContent.renderLicenseSection(data.license);

    const readmeContent =`${generateContent.generateMarkdown(1)} ${data.title}
${generateContent.generateMarkdown(2)} Table of Contents
- [Description](#description)
- [Installation]( #installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions) 
${generateContent.generateMarkdown(2)}  Description
- The ReadMe Generator Tool was developed by [${data.authors}](https://github.com/${data.github}).
- [GiHub Link](https://github.com/${data.github}/readme-generator)
- [Video recordering]( ${data.video})
- Date: ${currentDate}

${generateContent.generateMarkdown(3)} ${data.description}

${generateContent.generateMarkdown(2)}  Installation
${data.intallation}
${generateContent.generateMarkdown(2)}  Usage
${data.usage} 
For more details prease review the video.
${generateContent.generateMarkdown(2)} License
${licenseSection}
${generateContent.generateMarkdown(2)}  Contributing
${data.contribution}
${generateContent.generateMarkdown(2)}  Tests
${data.tests}
${generateContent.generateMarkdown(2)}  Questions
If you have any questions, you can reach out to [me](https://github.com/${data.github}) at 
[${data.email}](mailto:${data.email}).`

    //dataFile = JSON.stringify(data);
    fs.writeFile(fileName, readmeContent, (err) =>
        err ? console.log(err) : console.log('\x1b[33m%s\x1b[0m', `Thank you for the details.\nREADME.md file was succesfully created!`)
    )
}

// Function to initialize app
function init() {
    console.log(`Welcome to the ReadMe generator!\nPlease follow the instructions:`);
    // console.log(renerateMarkdown.renderLicenseBadge('MIT'))
    askQuestions(questions);
}

// Function call to initialize app
init();
