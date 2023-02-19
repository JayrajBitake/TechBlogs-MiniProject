import React from 'react';
import  { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { GetLoginService } from '../services/api';
import './login.css';
import { Link } from 'react-router-dom';



const Login = (props) => {

  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState();

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
      e.preventDefault();
      getUserData();
    }

  
    const getUserData = async ()=>{
      const response = await GetLoginService(username,pass)
      console.log(response.data)

      if (response.data == "" ){
        setError("Invalid username or password")

      } else if (response.data.username ==  "blogadmin100" ) {

        navigate('/add-course');
        
      } else 
      {
          navigate('/view-blog');

      }
      
      
    }






  return (
    <div className="login">
    <span className="loginTitle">Login</span>
    <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="Username">username</label>
        <input className="loginInput" value={username} onChange={(e) => setUsername(e.target.value)}type="text" placeholder="youremail@gmail.com" id="username" name="username" />
        <label htmlFor="password">password</label>
        
        <input className="loginInput" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        <p>{error}</p>
        <button className="loginButton" type="submit">Log In</button>
        <Link to="/signup">
    <button className="loginRegisterButton" >Don't have an ac? Register here.</button>
     </Link>
    </form>
   
     <div>

<Link to="/">
<button className="homebutton" >Go to Home</button>
</Link>
</div>
    
</div>
  )
}

export default Login