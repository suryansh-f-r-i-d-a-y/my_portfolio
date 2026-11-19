import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';


function App() {
  useEffect(() => {
  }, []);



  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
