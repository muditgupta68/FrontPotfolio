import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Project from './pages/Project';
import Blog from './pages/Blog';
import Loading from './pages/Loading';

const App = () => {
  return (
    <div className='background'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        {/* <Route path="/loading" element={<Loading />} /> */}
      </Routes>
    </div>
  )
}

export default App
