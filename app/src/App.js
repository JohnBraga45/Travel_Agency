import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
   
} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar'
 
import Login from './components/Login.js'
import SignUp from './components/SignUp'
 

 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp/>} />
        
      </Routes>
    </Router>
  )
}

export default App
