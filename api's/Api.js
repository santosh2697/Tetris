import axios from "axios";

//Api call to create user
export function createUserAccount(userName) {
  return axios.post("https://tetris-server-edca.onrender.com/createUser", {
    name: userName,
    highScore: 0,
  });
}

//Api call to update user details
export function updateUser(userName, highScore) {
  return axios.post("https://tetris-server-edca.onrender.com/updateUser", {
    name: userName,
    highScore: highScore,
  });
}
