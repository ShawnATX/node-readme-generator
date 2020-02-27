const axios = require('axios');

const gitAPIRequest = (username) => {
  try{
    return axios.get('https://api.github.com/users/' + username)
  } catch (error) {
    console.error(error)
  }
}  

const api = async (username) => {
  const userInfo = gitAPIRequest(username)
  .then(response => {
    let userObj = {
      username: response.data.login,
      email: response.data.email,
      avatar: response.data.avatar_url
    }
    //console.log(userObj);
    return userObj;
  })
}


  
  module.exports = api;




    // const getUser = async () => {
    //   const userInfo = gitAPIRequest()
    //   .then(response => {
    //     let userObj = {
    //       username: response.data.login,
    //       email: response.data.email,
    //       avatar: response.data.avatar_url
    //     }
    //     // console.log(userObj);
    //     return userObj;
    //   })
    // }