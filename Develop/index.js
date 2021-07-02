// TODO: Include packages needed for this application
const fs = require("fs");
const generateReadme = require('./dist/generateMarkdown');
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
        {
            type: "input",
            name: "title",
            message: "What is the name of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Provide a description of the project"
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
          },
        {
            type: "confirm",
            name: "confirmLink",
            message: "Would you like to add a link for deployed application?"
          },
          {
            type: "input",
            name: "link",
            message: "Please enter link for deployed application",
            when: ({ confirmLink }) => confirmLink
          },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process please"
        },
        {
            type: "input",
            name: "usage",
            message: "Provide the detail on 'how to use' your project?"
        },
        {
            type: "confirm",
            name: "confirmCredits",
            message: "Would you like to list anyone in the 'Credits' section?",
            when: ({ confirmCredits }) => confirmCredits
          },
          {
            type: "input",
            name: "credits",
            message: "Please add the names to the 'Credits' section"
          },
          {
            type: "list",
            name: "license",
            message: "Choose the license for this project? ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
    ];

    const promptUser = () => {
      return inquirer.prompt(questions);
    }
    
// TODO: Create a function to write README file
function writeToFile(fileName, data) { fs.writeFile(filename, data, (err)=> {
  if (err) {
  throw err;
}
  console.log("ReadMe was created saccesfully")
});
}
 

// TODO: Create a function to initialize app
function init() {
  promptUser()
      .then(questions => {
          return generateReadme(questions);
      })
      .then(formattedPage => {
          return writeToFile(formattedPage);
      })
      .then(writeFileResponse => {
          console.log(writeFileResponse);
      })
      .catch(err => {
          console.log(err);
      })
}

// Function call to initialize app
init();
