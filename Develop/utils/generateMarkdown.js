// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [![License](https://img.shields.io/badge/license-${data.license}-orange)](https://opensource.org/licenses)
  ---
  ##  Description
    ${data.description}
    
    ####Built with:
    ${data.languages}
    
    [Live link]
    ${data.link}


---
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credit)
  * [Contribute](#contribute)
  * [Test](#test)
  * [License](#license)
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
  ##Contribute
  ${data.contribute}

---
  ## Test
  ${data.test}
  
---
  ## License
  ${data.license}

---
## Questions?
  If you have any question or require any further information, feel free to contact me. 
  
  [GitHub u/${data.github}](https://github.com/${data.github})

${data.email}
`;
}

module.exports = generateMarkdown;
