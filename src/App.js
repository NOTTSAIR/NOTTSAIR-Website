import React, { useState, useEffect } from 'react';
import './App.css';

const NottsAir = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerShadow, setHeaderShadow] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setHeaderShadow(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setFormMessage("Thank you! Your message has been sent.");
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormMessage(''), 5000);
    } else {
      setFormMessage("Please fill in all fields.");
      setTimeout(() => setFormMessage(''), 3000);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <div>
        {/* Header & Navigation */}
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

        <main>
          {/* Hero Section */}
          <section id="hero" className="hero">
            <div className="hero-bg"></div>
            <div className="hero-overlay"></div>
            <div className="container">
              <div className="hero-content">
                <h1 className="hero-title">
                  Engineering the Future of <span className="gradient-text">Autonomous Racing</span>
                </h1>
                <p className="hero-subtitle">
                  The University of Nottingham's Premier Formula Student AI Team. We design, build, and race the next generation of autonomous vehicles.
                </p>
                <div className="hero-buttons">
                  <a href="#gallery" className="hero-button primary" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>View Our Car</a>
                  <a href="#sponsors" className="hero-button secondary" onClick={(e) => { e.preventDefault(); scrollToSection('sponsors'); }}>Become a Partner</a>
                </div>
              </div>
            </div>
          </section>

          {/* Team/About Section */}
          <section id="about" className="section">
            <div className="container">
              <h2 className="section-title">About <span className="gradient-text">NottsAir</span></h2>
              <p className="section-subtitle">We are a dedicated group of students from the University of Nottingham, united by a passion for motorsport, artificial intelligence, and cutting-edge engineering. Our mission is to push the boundaries of autonomous vehicle technology and compete at the highest level of Formula Student AI.</p>
              
              <div className="team-grid">
                <div className="team-card">
                  <img src="https://placehold.co/200x200/F5FBEF/0A192F?text=Team+Lead" alt="Team Lead" className="team-photo" />
                  <h3 className="team-name">Alex Johnson</h3>
                  <p className="team-role">Team Lead</p>
                </div>
                <div className="team-card">
                  <img src="https://placehold.co/200x200/F5FBEF/0A192F?text=Software" alt="Software Lead" className="team-photo" />
                  <h3 className="team-name">Ben Carter</h3>
                  <p className="team-role">Software Lead</p>
                </div>
                <div className="team-card">
                  <img src="https://placehold.co/200x200/F5FBEF/0A192F?text=Hardware" alt="Hardware Lead" className="team-photo" />
                  <h3 className="team-name">Chloe Davis</h3>
                  <p className="team-role">Hardware Lead</p>
                </div>
                <div className="team-card">
                  <img src="https://placehold.co/200x200/F5FBEF/0A192F?text=Business" alt="Business Lead" className="team-photo" />
                  <h3 className="team-name">Diana Evans</h3>
                  <p className="team-role">Business Lead</p>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="section alt">
            <div className="container">
              <h2 className="section-title">Our Journey in <span className="gradient-text">Pictures</span></h2>
              <p className="section-subtitle">From late-night builds in the workshop to the thrill of the racetrack, here's a glimpse into the world of NottsAir.</p>

              <div className="gallery-grid">
                <div className="gallery-column">
                  <img className="gallery-image" src="https://placehold.co/500x800/0A192F/38A3A5?text=NA-01+Car" alt="NottsAir Car" />
                  <img className="gallery-image" src="https://placehold.co/500x600/0A192F/38A3A5?text=CAD+Design" alt="CAD Design" />
                </div>
                <div className="gallery-column">
                  <img className="gallery-image" src="https://placehold.co/500x600/0A192F/38A3A5?text=Team+Working" alt="Team working on car" />
                  <img className="gallery-image" src="https://placehold.co/500x800/0A192F/38A3A5?text=Track+Day" alt="Car on track" />
                </div>
                <div className="gallery-column">
                  <img className="gallery-image" src="https://placehold.co/500x800/0A192F/38A3A5?text=Sensors" alt="Sensor technology" />
                  <img className="gallery-image" src="https://placehold.co/500x600/0A192F/38A3A5?text=Electronics" alt="Electronics work" />
                </div>
                <div className="gallery-column">
                  <img className="gallery-image" src="https://placehold.co/500x600/0A192F/38A3A5?text=Competition" alt="Competition day" />
                  <img className="gallery-image" src="https://placehold.co/500x800/0A192F/38A3A5?text=Podium+Finish" alt="Team celebrating" />
                </div>
              </div>
            </div>
          </section>

          {/* Sponsors & Partners Section */}
          <section id="sponsors" className="section">
            <div className="container">
              <h2 className="section-title">Our Valued <span className="gradient-text">Sponsors & Partners</span></h2>
              <p className="section-subtitle">Our success is driven by the generous support of our partners. Their contributions provide us with the resources needed to innovate and compete. We are incredibly grateful for their belief in our vision.</p>
              <div className="sponsors-grid">
                <img src="https://placehold.co/200x100/F5FBEF/0A192F?text=Sponsor+A" alt="Sponsor Logo 1" className="sponsor-logo" />
                <img src="https://placehold.co/200x100/F5FBEF/0A192F?text=Sponsor+B" alt="Sponsor Logo 2" className="sponsor-logo" />
                <img src="https://placehold.co/200x100/F5FBEF/0A192F?text=Sponsor+C" alt="Sponsor Logo 3" className="sponsor-logo" />
                <img src="https://placehold.co/200x100/F5FBEF/0A192F?text=Sponsor+D" alt="Sponsor Logo 4" className="sponsor-logo" />
                <img src="https://placehold.co/200x100/F5FBEF/0A192F?text=Sponsor+E" alt="Sponsor Logo 5" className="sponsor-logo" />
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="section alt">
            <div className="container">
              <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
              <p className="section-subtitle">Have questions, want to join the team, or interested in sponsoring us? We'd love to hear from you. Reach out through the form below or connect with us on social media.</p>

              <div className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="form-input" 
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="form-input" 
                    placeholder="name@company.com" 
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    className="form-textarea" 
                    placeholder="Let us know how we can help..." 
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <button type="button" className="form-submit" onClick={handleFormSubmit}>Send Message</button>
              </div>
              {formMessage && <div className="form-message">{formMessage}</div>}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <span className="footer-text">&copy; 2024 NottsAir Formula Student AI. All Rights Reserved.</span>
              <div className="social-links">
                <a href="https://www.instagram.com/airnotts/" className="social-link">
                  <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/airnotts/" className="social-link">
                  <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default NottsAir;