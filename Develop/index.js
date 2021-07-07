// TODO: Include packages needed for this application
const fs = require("fs");
const generateReadme = require('./utils/generateMarkdown');
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
          },
          {
            type: "input",
            name: "credits",
            message: "Please add the names to the 'Credits' section",
            when: ({ confirmCredits }) => confirmCredits
          },
          {
            type: "input",
            message: "Contribution Guidelines:",
            name: "contribute",
        },
          {
            type: "list",
            name: "license",
            message: "Choose the license for this project? ",
            choices: [
                "APACHE 2.0",
                "MIT",
                "GPL 3.0",
                "BSD 3",
                "None"
            ]
        },
        {
          type: "input",
          name: "test",
          message: "Write tests for your application.",
      },
      {
        type: "input",
        name: "github",
        message: "Enter is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your Email address?",
    },
    ];

    const promptUser = () => {
      return inquirer.prompt(questions);
    }
    
// TODO: Create a function to write README file
function writeToFile(data) {
  return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', data, err => {
          if (err) {
              reject(err); 
              return;
          }
          resolve({
              ok: true,
            message: 'ReadMe was created saccesfully!'
          })
      })
  })
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
