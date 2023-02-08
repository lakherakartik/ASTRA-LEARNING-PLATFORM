import React, {} from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';

import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';

import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import CoursesPage from './components/CoursePage/Coursepage';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import Profile from './components/Profile/Profile';

import Subscribe from './components/Payments/Subscribe';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import PaymentFail from './components/Payments/PaymentFail';
import NotFound from './components/Layout/NotFound/NotFound';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Aboreto&display=swap');
</style>


function App() {

  window.addEventListener("contextmenu", (e)=>{
    e.preventDefault();
  })

  return (
  <Router>

    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/courses' element={<Courses/>} />

      <Route path='/profile' element={<Profile/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/forgetpassword' element={<ForgetPassword/>} />
      <Route path='/resetpassword/:token' element={<ResetPassword/>} />
      <Route path='/request' element={<Request/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />

      <Route path='/subscribe' element={<Subscribe/>} />
      <Route path='/paymentSuccess' element={<PaymentSuccess/>} />
      <Route path='/paymentFail' element={<PaymentFail/>} />
      <Route path='/*' element={<NotFound/>} />
      <Route path='/courses/:id' element={<CoursesPage/>} />
    </Routes>

    <Footer/>
  </Router>
  );
}

export default App;
