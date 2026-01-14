import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Import all your components
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar'; // Assuming you have a navigation bar
function App() {
  return (
    // Router should wrap your entire application
    <Router>
      <div className="App">
        {/* The Navbar component typically sits outside the Routes so it appears on every page */}
        <Navbar /> 
        
        {/* Routes defines which component to render for a given path */}
        <Routes>
          {/* Main page - path is just '/' */}
          <Route path="/" element={<Home />} />
          
          {/* Portfolio sections */}
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Optional: Add a 404 Not Found route */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;