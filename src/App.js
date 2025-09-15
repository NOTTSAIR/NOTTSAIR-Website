import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './pages/Hero';
import Footer from './components/Footer';
import About from './pages/About';
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
    return (
        <Router>
            <ScrollToTop />
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
