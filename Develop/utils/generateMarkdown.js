// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ---
  ##  Description
    ${data.description}

  ---
    Built with:
    ${data.languages}
    
  
  ---
    Live link: ${data.link}


---
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Contribute](#contribute)
  * [Test](#test)
  ${renderLicenseLink(data.license)}
  * [Questions](#questions) 
---
  # Installation
  ${data.installation}

---
  ## Usage
  ${data.usage}

---
  ## Credits
  ${data.credits}

---
  ## Contribute
  ${data.contribute}

---
  ## Test
  ${data.test}
  
---
${renderLicenseSection(data.license)}

---
 
## Questions?
  If you have any question or require any further information, feel free to contact me. 
  
  [GitHub page](https://github.com/${data.github})

${data.email}
`;
}

module.exports = generateMarkdown;
