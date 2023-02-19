import axios from "axios";


const BASE_URL = 'http://localhost:8080';

export  function UserDataService(data){
    console.log(data);
    return axios.post(`${BASE_URL}/createuser`, data)
}


export  function GetLoginService(username,pass){
    console.log(username,pass);
    return axios.get(`${BASE_URL}/user/login/${username}/${pass}`)
}

