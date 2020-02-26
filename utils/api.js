const axios = require('axios');


const api = {
  //connect to github API to retrieve user information
      getUser: async function getUser(username) {
        try {
          const response = await axios.get('https://api.github.com/users/' + username);
          let userObj = {
            username: response.data.login,
            email: response.data.email,
            avatar: response.data.avatar_url
          }
          //console.log(userObj);
          return userObj;
        } catch (error) {
          if (error.response.status === '404'){
            console.log("Username not found");
          }
        }
      }

    };
    
    module.exports = api;
    