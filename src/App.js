import './App.css';
import React, { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom'
import AboutMe from './components/aboutme/AboutMe'
import Portfolio from './components/portfolio/Portfolio'
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer.js'

function App() {

  // state functions for name contact form 
  const [name, setName] = useState("")
  const handleChangeName = (event) => {
    // console.log('name = ', event.target.value)
    setName(event.target.value)
    console.log(name)
  }

  // validate email function with regex
  // function validateEmail(input) {
  //   console.log(input)
  //   if (input.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
  //     console.log('match!')
  //   } else {
  //     console.log('not match')
  //   }
  // } 

  //state functions for email contact form 
  const [email, setEmail] = useState("")
  const handleChangeEmail = (event) => {
    // console.log('email = ', event.target.value)
    setEmail(event.target.value)
     if (email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
          console.log('match!')
        } else {
          console.log('not match')
        }
    console.log(email)
  }

  //state functions for email contact form 
  const [message, setMessage] = useState("")
  const handleChangeMessage = (event) => {
    // console.log('message = ', event.target.value)
    // if (!message) {
    //  return (<p>Please add a message.</p>)
    // }
    setMessage(event.target.value);
    console.log(message)

  
  


  }

  return (
    <>
      <div className='header'>
        <h1>Miles Moss</h1>
        <div className='navbar'>
          <nav>
            <NavLink to='/'>About Me</NavLink>
            <NavLink to='/portfolio'>Portfolio</NavLink>
            <NavLink to='/resume'>Resume</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
          </nav>
        </div>
      </div>

      <Routes>
        <Route path='/' element={<AboutMe />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact'
          element={<Contact
            name={name}
            handleChangeName={handleChangeName}
            email={email}
            handleChangeEmail={handleChangeEmail}
            message={message}
            handleChangeMessage={handleChangeMessage}
          // handleSubmit={handleSubmit}
          />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
