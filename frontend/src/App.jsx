import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Generate from './Pages/Generate';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/generate' element={<Generate/>}/>

    </Routes>
    </>
  )
}

export default App
