const inquirer = require("inquirer");
const fs = require("fs");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");


const questions = [
    "What is your Github username?", 
    "What is the title of this project?",
    "What is the description of this project?",
    "What is the Table of Contents for this project?",
    "What is the Installation guide for this project? (leave empty if none)",
    "What is the usage guide for this project?",
    "License?",
    "Contributing authors?",
    "Tests for this project?",
    "Questions"

];

function writeToFile(fileName, data) {
}

function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: questions[0],
                name: "username"
            },
            {
                type: "input",
                message: questions[1],
                name: "title"
            },
            {
                type: "input",
                message: questions[2],
                name: "description"
            },
            {
                type: "input",
                message: questions[3],
                name: "toc"
            },
            {
                type: "input",
                message: questions[4],
                name: "installation"
            },
            {
                type: "input",
                message: questions[5],
                name: "usage"
            },
            {
                type: "list",
                message: questions[6],
                name: "license",
                choices: [
                    "MIT",
                    "ISC",
                    "GNU GPLv3",
                    "GNU AGPLv3",
                    "Mozilla Public License 2.0",
                    "The Unlicense"
                ]
            },
            {
                type: "input",
                message: questions[7],
                name: "contributors"
            },
            {
                type: "input",
                message: questions[8],
                name: "tests"
            },
            {
                type: "input",
                message: questions[9],
                name: "questions"
            },
        ])
        .then(function (response) {
            //get Github into
            let user = api.getUser(response.username);
            console.log(user);
            
        });
}

init();