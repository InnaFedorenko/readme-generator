# SVG logo maker
## Table of Contents
- [Description](#description)
- [Installation]( #installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions) 
##  Description
- The ReadMe Generator Tool was developed by [Inna Fedorenko](https://github.com/InnaFedorenko).
- [GiHub Link](https://github.com/InnaFedorenko/readme-generator)
- [Video recordering]( )
- Date: 05-25-2023

### Node.js command-line application that takes in user input to generate a logo and save it as an [SVG file](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics). The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.
### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```


##  Installation
To use the ReadMe Generator Tool, follow these steps:

1. Clone the GitHub repository: [SVG Generator Tool](#github)
2. Install the required dependencies by running ```npm install``` in the project directory


##  Usage
To generate a README file with the ReadMe Generator Tool, run the following command:```npm index``` and follow the instruction to provifr ReadMe data.  
For more details prease review the video.
## License
![License](https://img.shields.io/badge/License-MIT-yellow.svg)  
  This application is covered under the [MIT License](https://opensource.org/licenses/MIT).
##  Contributing
Contributions are welcome!
##  Tests
ToBe developed for future version.You can run the automated tests for the ReadMe Generator Tool by executing the following command: ```npx jest``` ot ```npm run test```
##  Questions
If you have any questions, you can reach out to [me](https://github.com/InnaFedorenko) at 
[ivf.fedorenko@gmail.com](mailto:ivf.fedorenko@gmail.com).