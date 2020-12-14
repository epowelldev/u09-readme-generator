const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");


// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a description of your application."
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install your application?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use the application?"
    },
    {
        type: "input",
        name: "license",
        message: "What license is your application created under?"
    },
    {
        type: "input",
        name: "contributing",
        message: "How do you contribute to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "What tests were involved with development?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your contact email?"
    }
];

// function to write README file
function writeToFile(fileName, data) {

    //pass response to the generateMarkdown function
    const content = generateMarkdown(data);

    //write the file using called information
    fs.writeFile(fileName, content, (err) => {
        if(err) console.log(err);
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(response => {

            //remember to log all the things
            console.log(response)
            //writefile
            writeToFile("README_GEN.md", response)
        });
}

// function call to initialize program
init();
