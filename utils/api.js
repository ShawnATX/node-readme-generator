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
    let email;
    const userInfo = await gitAPIRequest(username);
    if(userInfo.data.email === null){
      email = "User email is private"
    }
    else{
      email = userInfo.data.email;
    }
    let userObj = {
      username: userInfo.data.login,
      email: email,
      avatar: userInfo.data.avatar_url
    }
    return userObj;
  }catch(err){
    console.log(err);
  }
}
  
module.exports = api;