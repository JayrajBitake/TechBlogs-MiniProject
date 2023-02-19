import React from 'react'
import  { useState } from "react";
import {UserDataService} from "../services/api";
import "./register.css";
import "../services/api";
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'


const Register = (props) => {


  const[data, setData] = useState({

    name:'',
    username:'',
    email:'',
    password:''

  })

  const navigate = useNavigate();

  const handleChange=(event,property)=>{

  setData({...data,[property]:event.target.value})

  }


  const handleSubmit=(event) =>{
    event.preventDefault()
    postUserData();
    console.log(data);

  }


  const postUserData = async ()=>{
    const response = UserDataService(data);
    navigate('/login');


  }

//   function saveTutorial() {
//     var userdata = {
//         name: setData.name,
//         email: setData.email,
//         password: setData.password
//     };


//   UserDataService.create(data).then(response => {
//     setData({
//         name: response.data.name,
//         email: response.data.email,
//         password: response.data.password


//     });
//     console.log(response.data);
// }).catch(e => {
//     console.log(e);
// });





  return (
    <div className="register">
            <span className="registerTitle">Register</span>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input className="registerInput" value={data.name} name="name" onChange={(e) => handleChange(e, 'name') }  id="name" placeholder="full Name" />
            <label htmlFor="name">user name</label>
            <input className="registerInput" value={data.username} name="username" onChange={(e) => handleChange(e, 'username') }  id="username" placeholder="user Name" />
            <label htmlFor="email">email</label>
            <input className="registerInput" value={data.email} onChange={(e) => handleChange(e, 'email') }type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input className="registerInput" value={data.pass} onChange={(e) => handleChange(e, 'pass') } type="pass" placeholder="********" id="password" name="password" />
            <button className="registerButton" type="submit" 
            // onClick={saveTutorial}
            >Sign Up</button>
        </form>
        <Link to ="/login">
        <button className="loginRegisterButton" >Already have an account? Login here.</button>
        </Link>

<div>
<Link to="/">
<button className="homebutton" >Go to Home</button>
</Link>
</div>

    </div>
  )

}



export default Register