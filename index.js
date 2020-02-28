const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown");
const api = require("./utils/api");

const questions = [
    "What is your Github username?", 
    "What is the title of this project?",
    "What is the description of this project?",
    "What is the Installation guide for this project?",
    "What is the usage guide for this project?",
    "License?",
    "Contributing authors?",
    "Please describe any tests for this project?"
];

const writeToFile = (fileName, data) =>  {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
    })
}

let getMarkdown = async function(data, user){
    try{
        const newReadme = await markdown(data, user);
        return (newReadme);
    }catch(err){
        console.log(err);
    }
}

function promptUser(){
    return inquirer.prompt([
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
            name: "installation"
        },
        {
            type: "input",
            message: questions[4],
            name: "usage"
        },
        {
            type: "list",
            message: questions[5],
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
            message: questions[6],
            name: "contributors"
        },
        {
            type: "input",
            message: questions[7],
            name: "tests"
        }
    ])
};

async function init() {
  try{
    const answers = await promptUser();
    const user = await api(answers.username);
    const readmeContent = await getMarkdown(answers, user);
    await writeToFile("./Readme/Readme.md", readmeContent);

    console.log("Readme created!")
  }catch(err){
      console.log(err);
  }
}

init();
