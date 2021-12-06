// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = licenseName => {
  if (!licenseName) {
    return "";
  }
  return `![License](https://img.shields.io/static/v1?label=license&message=${licenseName.split(" ").join("%20")}&color=blue)`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = licenseName => {
  if (!licenseName) {
    return "";
  }
  return `* [License](#license)
  `
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = licenseName => {
  if (!licenseName) {
    return "";
  }
  const { name, license } = licenseName;

  var licenseSection = "";

  switch (license) {
    case "The Unlicense":
      licenseSection = `## License
      [The Unlicense](https://spdx.org/licenses/Unlicense.html)
      This is free and unencumbered software released into the public domain.
      
      Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

      In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.

      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      `;
      break;
    case "MIT License":
      licenseSection = `## License
      [MIT License](https://spdx.org/licenses/MIT.html)
      MIT License

      Copyright (c) 2021 ${name}

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software.

      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      `;
      break;
    case "GNU AGPLv3":
      licenseSection = `## License
      [GNU AGPLv3](https://spdx.org/licenses/GPL-3.0-or-later.html)
      
      Copyright (C) 2021 ${name}

      This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

      This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

      You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
      `;
      break;
  }
  return licenseSection;
};

// Create the installation section
const generateInstallation = installText => {
  if (!installText) {
    return "";
  }
  return `
    ## Installation
    ${data.installation.split("; ")}

  `
}

// TODO: Create a function to generate markdown for README
module.exports = answers => {
  console.log(answers);

  const { license, installation, tests, github, email, ...info } = answers;

  console.log(license);

  return `
  # ${info.title}
  
  ${renderLicenseBadge(license)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#test)
  * [Contact](#contact)
  ${renderLicenseLink(license)}

  ## Description
  ${info.description}

  ## Installation
  ${installation}

  ## Usage
  ${info.usage}

  ## Contribution
  ${info.contribution}
  
  ## Tests
  ${tests}

  ## Contact
  [https://github.com/${github}](https://github.com/${github})

  You can reach me at [${email}](mailto:${email}) for additional questions.

  ${renderLicenseSection(info.name, license)}

`;
}

// module.exports = generateMarkdown;
