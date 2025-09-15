import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './pages/Hero';
import Footer from './components/Footer';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
