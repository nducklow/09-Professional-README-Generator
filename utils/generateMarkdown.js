// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  const badges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache-2.0': '[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GPL-3.0': '[![License: GPL-3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/GPL-3.0)',
    'BSD-3-Clause': '[![License: BSD-3-Clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  };

  return badges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  const badgeLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache-2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPL-3.0': 'https://opensource.org/licenses/GPL-3.0',
    'BSD-3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
  };

  return badgeLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  const licenseLink = renderLicenseLink(license);
  return `## License

This project is licensed under the ${license} license. For more information, please visit [here](${licenseLink}).`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary packages, run:

\`\`\`
${data.install}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contribute}
  
## Tests

To run tests, run:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions feel free to email me at ${data.email}.

Here are my other projects! (https://github.com/${data.username}/).
`;
}

module.exports = generateMarkdown;
