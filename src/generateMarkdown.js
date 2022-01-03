// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const generateLicense = aboutLicense => {
  if(!aboutLicense) {
    return '';
  }
  return `
  # License
![https://img.shields.io/npm/l/li](https://img.shields.io/npm/l/li)
`
}
// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {

module.exports = (templateData) => {
  const {...data } = templateData;

  return `
  # ReadMe
   ${data.title}


  ${generateLicense(data)}

  
# Table of Content
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Testing](#Test)
  - [Contribution](#Contribution)
  - [Questions](#question)
  
  <a name="Description"></a>
# Description
    * Here you will get a brief description of the project.
  - ${data.projectInfo}
  
# Usage
  - ${data.usage}
  
# How to test this application
  - ${data.test}
  
# Contribution
  -  ${data.contribution}
  
# Here are the different Installation we used
 - ${data.installation}
  
 <a name="question"></a>
# Questions
  - Name: ${data.name}
  - Github Username: ${data.github}
  - Github link: ${data.githubLink}
  - Email: ${data.email}
  - Contact: ${data.contact}
  `;
};

// module.exports = generateMarkdown;
// https://img.shields.io/hexpm/l/we
// # License
// ![https://img.shields.io/npm/l/li](https://img.shields.io/npm/l/li)
// ![https://img.shields.io/hexpm/l/we](https://img.shields.io/hexpm/l/we)



// # License
// ![https://img.shields.io/npm/l/li](https://img.shields.io/npm/l/li)