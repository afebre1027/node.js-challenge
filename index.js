// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./src/generateMarkdown.js");

// // TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    //about me (question section)
    {
      type: "input",
      name: "name",
      message: "What is your name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub Username?",
    },
    {
      type: "input",
      name: "githubLink",
      message: "What is your GitHub Link?",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your Emal address?",
    },
    {
      type: "input",
      name: "contact",
      message: "How can we contact you?",
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of your Project?",
    },

    // Project Description
    {
      type: "input",
      name: "projectInfo",
      message: "What is this project about?",
    },

    // License types
    {
      type: "confirm",
      name: "confirmAbout",
      message: "Is there a license?",
      default: true,
    },
    {
      type: "input",
      name: "license",
      message: "What license is being used?",
    },

    // Installation
    {
      type: "input",
      name: "installation",
      message: "What installations did you use?",
    },

    // Usage
    {
      type: "input",
      name: "usage",
      message: "What should be included when using this app?",
    },

    // test
    {
      type: "input",
      name: "test",
      message: "What command will run a test?",
    },

    // Contribution
    {
      type: "input",
      name: "contribution",
      message: "How can everyone contribute?",
    },
  ]);
};
const promptProject = (portfolioData) => {
  console.log(`project questions`);

  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }

  return inquirer
    .prompt([
      {
        type: "confirm",
        name: "confirmAddProject",
        message: "Would you like to add more extra info?",
        default: false,
      },
    ])
    .then((projectData) => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptProject)
  .then((portfolioData) => {
    const readMe = generateMarkdown(portfolioData);

    fs.writeFile("README.md", readMe, (err) => {
      if (err) throw err;
      console.log("ReadMe Completed!");
    });
  });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
