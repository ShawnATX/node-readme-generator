const api = require("./api");

//data object holds properties: username, title, description
//installation, usage, license, contributors, tests, questions
const generateMarkdown = (data) => {
  //console.log(data);
  
  //get Github info
  let gitAPIPromise = new Promise((resolve, reject) => {
    let user = api(data.username);
    console.log(user);
  });
  gitAPIPromise.then((resolve) => {
    console.log(resolve);
  });


    return `
  # ${data.title}

  ## Description

  ![Repo commit](https://img.shields.io/github/last-commit/shawnatx/node-readme-generator)
  ${data.description}
  
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributors

  ${data.contributors}

  ## Tests

  ${data.tests}

  ## Questions

  ### ${data.username}
  
  `;
}
// ![Image of ${data.username}](${userImage})


  module.exports = generateMarkdown;
  