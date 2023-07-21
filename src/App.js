import React from 'react';
import Navbar from "./components/Navbar"
import './App.css';
import Home from "./pages/Home"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
