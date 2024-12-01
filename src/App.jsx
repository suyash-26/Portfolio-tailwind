import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Resume from './pages/Resume'
import About from './pages/About'
import Footer from './components/Footer/Footer'
import Projects from './pages/Projects'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar className=''>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
        </Navbar>
      </BrowserRouter>
    </>
  )
}

export default App
