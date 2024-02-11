import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
const App = () => {
  return (
    <div className='container w-60 mx-auto'>
    <Home />
    <hr></hr>
    <Signup />
    <hr></hr>
    <Login />

    </div>
   
   
    
    
  )
}

export default App