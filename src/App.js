import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

/*ROOTING*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';


/*COMPONENTS*/
import Home from './components/Home/Home';
import Projects from './components/Project/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';  // Ajout du Header


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contact" element={<Projects />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
