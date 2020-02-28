//answers object holds properties: username, title, description
//installation, usage, license, contributors, tests, questions
const generateMarkdown = (answers, userObj) => {

  return `
  # ${answers.title}

  ## Description

  ![Repo commit](https://img.shields.io/github/last-commit/${userObj.username}/${answers.title})

  ${answers.description}
  
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  

  ## Installation

  ${answers.installation}

  ## Usage

  ${answers.usage}

  ## License

  ${answers.license}

  ## Contributors

  ${answers.contributors}

  ## Tests

  ${answers.tests}

  ## Questions

  ### ${userObj.username}
  ![Image of ${userObj.username}](${userObj.avatar})
  #### Email: ${userObj.email}
  
  `;
}


module.exports = generateMarkdown;
  