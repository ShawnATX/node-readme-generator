const axios = require('axios');


const api = {
  //connect to github API to retrieve user information
      getUser: async function getUser(username) {
          const response = axios
          .get('https://api.github.com/users/' + username)
          .then (function(response) {
            let userObj = {
              username: response.data.login,
              email: response.data.email,
              avatar: response.data.avatar_url
            }
            //console.log(userObj);
            return userObj;
          }) 
          // .fail (function (error) {
          //   if (error.response.status === '404'){
          //     console.log("Username not found");
          //   }
          //   else{
          //     console.log("Error: " + error.response.statusText)
          //   }
          // }) 
      }
    };
    
    module.exports = api;
    