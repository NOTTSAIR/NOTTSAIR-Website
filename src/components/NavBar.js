import React, { useState, useEffect } from 'react';

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [headerShadow, setHeaderShadow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setHeaderShadow(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
        }
    };

    return (
        <>
        <header className={`header ${headerShadow ? 'shadow' : ''}`}>
            <div className="container">
            <div className="header-content">
                <a href="#hero" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
                NOTTS<span className="gradient-text">AiR</span>
                </a>
                <nav className="nav">
                <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
                <a href="#gallery" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>Gallery</a>
                <a href="#sponsors" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('sponsors'); }}>Sponsors</a>
                <a href="#contact" className="cta-button" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact Us</a>
                </nav>
                <button 
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                <svg className="social-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
                </button>
            </div>
            </div>
            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#about" className="mobile-menu-item" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
            <a href="#gallery" className="mobile-menu-item" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>Gallery</a>
            <a href="#sponsors" className="mobile-menu-item" onClick={(e) => { e.preventDefault(); scrollToSection('sponsors'); }}>Sponsors</a>
            <a href="#contact" className="mobile-menu-item" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
            </div>
        </header>
        </>
    );
};

export default NavBar;

