import React, { useEffect } from 'react';
import * as assets from './assets';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './pages/Hero';
import Footer from './components/Footer';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Sponsors from './pages/Sponsors';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

function App() {
    useEffect(() => {
        [
            assets.Gallery1,
            assets.Gallery2,
            assets.Gallery3,
            assets.Gallery4,
            assets.Gallery5,
            assets.Gallery6,
            assets.Gallery7,
            assets.Gallery8,
            assets.Gallery9,
            assets.Gallery10,
            assets.Gallery11,
            assets.Gallery12,
            assets.Gallery13,
        ].forEach((src) => {
            const img = new window.Image();
            img.src = src;
        });
    }, []);
    return (
        <Router>
            <ScrollToTop />
            <NavBar />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/sponsors" element={<Sponsors />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
