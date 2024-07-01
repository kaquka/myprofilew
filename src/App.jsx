import React from "react"
import { Route, Routes } from "react-router-dom"

import Home from "./screens/Home.jsx"
import About from "./screens/About.jsx"
import Projects from "./screens/Projects.jsx"
import Contact from "./screens/Contact.jsx"

import NavBar from "./components/NavBar.jsx"
import Footer from "./components/Footer.jsx"

import './index.css'

function App() {

  return (
    <div className='App'>
      <NavBar />
      <div class="md:mt-[100px]">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
  )
}

export default App
