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
            return userObj;
          }) 
      }
    };



    const gitAPIRequest = (username) => {
      try{
        return axios.get('https://api.github.com/users/' + username)
      } catch (error) {
    console.error(error)
    }}

    const user = async (username) => {
      const userInfo = gitAPIRequest(username)
      .then(response => {
        let userObj = {
          username: response.data.login,
          email: response.data.email,
          avatar: response.data.avatar_url
        }
        console.log(userObj);
        return userObj;
      })
    }

    
    module.exports = api;