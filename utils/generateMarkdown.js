// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
    return !license ? "" : `![](https://img.shields.io/badge/license-${license.trim()}-yellow)`
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
    return !license ? "" : '- [License](#license)'
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
 return !license ? "" : "## License"
}   

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

var markdown = `
# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(data.license)}

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credit}

${renderLicenseSection(data.license)}

${renderLicenseBadge(data.license)}

## How to Contribute

${data.contributing}

## Tests

${data.tests} `

return markdown; 

}

module.exports = generateMarkdown; 