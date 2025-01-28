import React from 'react'
import Navbar from './components/Navbar'
import Card from "./components/Card"
import Footer from './components/Footer'
import Form from './components/Form'
import { BrowserRouter,Routes ,Route} from 'react-router-dom'
import Box from './components/Box'





export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path='/card' element={<Card/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/box'  element={<Box/>}/>




      </Routes>

      <Footer/>
      </BrowserRouter>
  
    </div>
  )
}


