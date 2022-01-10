// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const generateLicense = (aboutLicense) => {
  if (!aboutLicense) {
    return "";
  }
  return `
![https://img.shields.io/npm/l/li](https://img.shields.io/npm/l/li)
`;
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license){
    return `
- [Description](#Description)
    `
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license){
  return `
# License
- the user used this license
  `
} else {
  return '';
}
}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {

module.exports = (templateData) => {
  const { ...data } = templateData;
    console.log(data);
  return `
# ReadMe
# ${data.title}

${renderLicenseSection(data.license)}
${generateLicense(data.license)}

  
# Table of Content
- [Description](#Description)
${renderLicenseLink(data.license)}
- [Installation](#Installation)
- [Usage](#Usage)
- [Testing](#Test)
- [Contribution](#Contribution)
- [Questions](#question)
  
  
# Description
## Here you will get a brief description of the project.
- ${data.projectInfo}
  
# Usage
- ${data.usage}
  
# How to test this application
- ${data.test}
  
# Contribution
- ${data.contribution}
  
# Here are the different Installation we used
- ${data.installation}
  
# Questions
- Name: ${data.name}
- Github Username: ${data.github}
- Github link: ${data.githubLink}
- Email: ${data.email}
- Contact: ${data.contact}
- Video Link: https://watch.screencastify.com/v/jDDPKWuML1aIq0HtPgHY
  `;
};

