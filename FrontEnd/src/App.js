import React from 'react';
import './App.css';
import {Button, Col, Container, Row} from "reactstrap"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Header from './components/Header';
import Course from './components/Course';
import Allcourses from './components/Allcourses';
import Menu from './components/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import { UserLogin } from './components/UserLogin';
import { UserRegistrationForm } from './components/UserRegistrationForm';
import { AddBlog } from './components/AddBlog';
import Login from './pages/Login';
import Register from './pages/Register';
import { ViewBlog } from './components/ViewBlog';

function App() {
  


  return (
    <div>
      <BrowserRouter>

      <ToastContainer/>
   
      <Container>
     
      <Header/>

   
            
          <Routes>
            {/* <Home/> */}
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Register/>} />
            <Route path='/add-course' element={<AddBlog/>} />
            <Route path='/view-course' element={<Allcourses/>} />
            <Route path='/view-blog' element={<ViewBlog/>} />

            {/* <Route path='/about-us' element={<Aboutus/>} />
            <Route path='/contact-us' element={<Contactus/>} /> */}

            </Routes>
         
      
      </Container>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
