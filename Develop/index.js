// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your project title? (required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your project title.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub Username? (required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub Username.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your email? (required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your email.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project. (required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a description for your project.");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "confirmInstall",
            message: "Are there installation instructions?",
            default: true
        },
        {
            type: "input",
            name: "installation",
            message: "List installation steps. Use a semi-colon ';' to seperate steps.",
            when: ({ confirmInstall }) => confirmInstall
        },
        {
            type: "input",
            name: "usage",
            message: "Provide usage information for your project. (required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter usage information for your project.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "contribution",
            message: "Provide guidelines for contribution. (required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter guidelines for contribution.");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "confirmTest",
            message: "Are there test instructions?",
            default: true
        },
        {
            type: "input",
            name: "test",
            message: "Provide test instructions. Use a semi-colon ';' to seperate steps.",
            when: ({ confirmTest }) => confirmTest
        },
        {
            type: "checkbox",
            name: "license",
            message: "Select a license. (required)",
            choices: ["The Unlicense", "MIT License", "GNU AGPLv3"]
        },
    ])
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
    // https://img.shields.io/static/v1?label=<LABEL>&message=<MESSAGE>&color=<COLOR>
    // https://img.shields.io/static/v1?label=<LABEL>&message=<The Unlicense>&color=<blue>
// }

const writeToFile = fileContent => {
    fileContent = "Something to test";

    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/README.md", fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "File created!"
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// questions()
// .then(questions => {
//     return writeToFile(questions)
// });

writeToFile();