import React, { useState, useEffect} from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import VariableProximity from './VariableProximity.js'; // Import the component
import LogoLoop from './LogoLoop';
import { SiInstagram, SiLinkedin } from 'react-icons/si';

import './NavBar.css';



const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [headerShadow, setHeaderShadow] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setHeaderShadow(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        setMobileMenuOpen(false);
        if (location.pathname !== '/') {
            navigate('/');
            // Use a timeout to allow the page transition to start
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100); // Adjust timeout as needed
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const proximityProps = {
        radius: 50,
        fromFontVariationSettings: "'wght' 400, 'opsz' 9",
        toFontVariationSettings: "'wght' 1000, 'opsz' 40",
        falloff: 'linear' 
    }


const techLogos = [
    { node: <SiInstagram />, title: "Instagram", href: "https://www.instagram.com/nottsair/" },
    {node: <SiLinkedin />, title: "Linkedin", href: "https://www.linkedin.com/company/airnotts/" },
      
    { node: <SiInstagram />, title: "Instagram", href: "https://www.instagram.com/nottsair/" },
    { node: <SiLinkedin />, title: "Linkedin", href: "https://www.linkedin.com/company/airnotts/" },
];





    return (
        <>
            <header className={`header ${headerShadow ? 'shadow' : ''}`}>
                <div className="container">
                    <div className="header-content">
                        <NavLink
                            to="/"
                            className="logo"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            NOTTS<span className="gradient-text">AiR</span>
                        </NavLink>
                        <nav className="nav">
                            <Link to="/about" className="nav-link">
                                <VariableProximity label="About" {...proximityProps} />
                            </Link>
                            <Link to="/gallery" className="nav-link">
                                <VariableProximity label="Gallery" {...proximityProps} />
                            </Link>
                            {/* <Link to="/sponsors" className="nav-link">
                                <VariableProximity label="Sponsors" {...proximityProps} />
                            </Link> */} 
                            <a
                                href="#sponsors"
                                className="nav-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('sponsors');
                                }}
                                
                            >
                                <VariableProximity label="Sponsors" {...proximityProps} />
                            </a>
                            <a
                                href="#contact"
                                className="cta-button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('contact');
                                }}
                            >
                                <VariableProximity label="Contact Us" {...proximityProps} />
                            </a>
                            <div className="social-links" style={{ overflow: 'hidden' }}>
                                <LogoLoop
                                    logos={techLogos}
                                    speed={40}              
                                    direction="left"
                                    logoHeight={24}         
                                    gap={30}               
                                    hoverSpeed={5}         
                                    scaleOnHover
                    
                                    
                                />
                                
                            </div>
                        </nav>
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <svg
                                className="social-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    <Link
                        to="/about"
                        className="mobile-menu-item"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        to="/gallery"
                        className="mobile-menu-item"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Gallery
                    </Link>
                    {/* <Link to="/sponsors" className="mobile-menu-item">
                        Sponsors
                    </Link> */}
                    <a
                        href="#sponsors"
                        className="mobile-menu-item"
                        onClick={(e) => {
                            e.preventDefault();
                            setMobileMenuOpen(false);
                            scrollToSection('sponsors');
                        }}
                    >
                        Sponsors
                    </a>
                    <a
                        href="#contact"
                        className="mobile-menu-item"
                        onClick={(e) => {
                            e.preventDefault();
                            setMobileMenuOpen(false);
                            scrollToSection('contact');
                        }}
                    >
                        Contact
                    </a>
                </div>
            </header>
        </>
    );
};

export default NavBar;
