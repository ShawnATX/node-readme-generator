const inquirer = require("inquirer");
const fs = require("fs");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");


const questions = [
    "What is your Github username?", 
    "Do you like me?"

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
                name: "likeMe"
            },
        ])
        .then(function (response) {
            console.log(api.getUser(response.username));
        });
}

init();
