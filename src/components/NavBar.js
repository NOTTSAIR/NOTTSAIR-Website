import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
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

    return (
        <>
            <header className={`header ${headerShadow ? 'shadow' : ''}`}>
                <div className="container">
                    <div className="header-content">
                        <NavLink to="/" className="logo">
                            NOTTS<span className="gradient-text">AiR</span>
                        </NavLink>
                        <nav className="nav">
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                            <Link to="/gallery" className="nav-link">
                                Gallery
                            </Link>
                            {/* <Link to="/sponsors" className="nav-link">
                                Sponsors
                            </Link> */}
                            <a
                                href="#sponsors"
                                className="nav-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('sponsors');
                                }}
                            >
                                Sponsors
                            </a>
                            <a
                                href="#contact"
                                className="cta-button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('contact');
                                }}
                            >
                                Contact Us
                            </a>
                            <div className="social-links">
                                <a
                                    href="https://www.instagram.com/airnotts/"
                                    className="social-link"
                                >
                                    <svg
                                        className="social-icon"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/airnotts/"
                                    className="social-link"
                                >
                                    <svg
                                        className="social-icon"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                                    </svg>
                                </a>
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
                    <Link to="/about" className="mobile-menu-item">
                        About
                    </Link>
                    <Link to="/gallery" className="mobile-menu-item">
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
