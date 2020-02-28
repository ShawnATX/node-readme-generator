const axios = require('axios');

const gitAPIRequest = (username) => {
  try{
    return axios.get('https://api.github.com/users/' + username)
  } catch (error) {
    console.error(error)
  }
}

const api = async function(username) {
  try{
    const userInfo = await gitAPIRequest(username);
    let userObj = {
      username: userInfo.data.login,
      email: userInfo.data.email,
      avatar: userInfo.data.avatar_url
    }
    return userObj;
  }catch(err){
    console.log(err);
  }
}
  
module.exports = api;