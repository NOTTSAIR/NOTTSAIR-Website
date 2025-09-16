import React, { useState } from 'react';
import yahyaImg from '../assets/images/yahya-alkhosoussy.jpg'
import tylerImg from '../assets/images/tyler-channer.jpg'
import persiaImg from '../assets/images/persia-farzanehnia.jpg'
import prathuImg from '../assets/images/prathu.jpg'
import './Hero.css';

const Hero = () => {
    const [formMessage, setFormMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleFormSubmit = () => {
        if (formData.name && formData.email && formData.message) {
            setFormMessage('Thank you! Your message has been sent.');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setFormMessage(''), 5000);
        } else {
            setFormMessage('Please fill in all fields.');
            setTimeout(() => setFormMessage(''), 3000);
        }
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <main>
            {/* Hero Section */}
            <section id="hero" className="hero">
                <div className="hero-bg"></div>
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Engineering the Future of{' '}
                            <span className="gradient-text">
                                Autonomous Racing
                            </span>
                        </h1>
                        <p className="hero-subtitle">
                            The University of Nottingham's Premier Formula
                            Student AI Team. We design, build, and race the next
                            generation of autonomous vehicles.
                        </p>
                        <div className="hero-buttons">
                            <a
                                href="https://forms.cloud.microsoft/e/f6kEXKqdMF?origin=lprLink"
                                className="hero-button primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Join Us
                            </a>
                            <a
                                href="#sponsors"
                                className="hero-button secondary"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('sponsors');
                                }}
                            >
                                Become a Partner
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team/About Section */}
            <section id="moto" className="section">
                <div className="container">
                    <h2 className="section-title">
                        Our Moto <span className="gradient-text">NottsAir</span>
                    </h2>

                    <p className="section-subtitle">
                        We are a dedicated group of students from the University
                        of Nottingham, united by a passion for motorsport,
                        artificial intelligence, and cutting-edge engineering.
                        Our mission is to push the boundaries of autonomous
                        vehicle technology and compete at the highest level of
                        Formula Student AI.
                    </p>

                    <div className="team-grid">
                        <div className="team-card">
                            <img
                                src={persiaImg}
                                alt="Team Lead"
                                className="team-photo"
                            />
                            <h3 className="team-name">Persia Farzanehnia</h3>
                            <p className="team-role">Co Lead</p>
                        </div>
                        <div className="team-card">
                            <img
                                src={tylerImg}
                                alt="Software Lead"
                                className="team-photo"
                            />
                            <h3 className="team-name">Tyler Channer</h3>
                            <p className="team-role">Co Lead</p>
                        </div>
                        <div className="team-card">
                            <img
                                src={yahyaImg}
                                alt="Perception Lead"
                                className="team-photo"
                            />
                            <h3 className="team-name">Yahya Alkhosoussy</h3>
                            <p className="team-role">Perception Lead</p>
                        </div>
                        <div className="team-card">
                            <img
                                src="https://placehold.co/200x200/F5FBEF/0A192F?text=TBD"
                                alt="Control Lead"
                                className="team-photo"
                            />
                            <h3 className="team-name">TBD</h3>
                            <p className="team-role">Control Lead</p>
                        </div>
                        <div className="team-card">
                            <img
                                src="https://placehold.co/200x200/F5FBEF/0A192F?text=TBD"
                                alt="Path Planning Lead"
                                className="team-photo"
                            />
                            <h3 className="team-name">TBD</h3>
                            <p className="team-role">Path Planning Lead</p>
                        </div>
                        <div className="team-card">
                            <img
                                src={prathuImg}
                                alt="Web-Dev Lead"
                                className="team-photo"
                            />
                            <h3 className="team-name">Prathu</h3>
                            <p className="team-role">Web-Dev Lead</p>
                        </div>
                        <div className="team-card">
                            <img
                                src="https://placehold.co/200x200/F5FBEF/0A192F?text=TBD"
                                alt="Business Lead"
                                className="team-photo"
                            />
                            <h3 className="team-name">TBD</h3>
                            <p className="team-role">Business Lead</p>
                        </div>
                        <div className="team-card">
                            <img
                                src="https://placehold.co/200x200/F5FBEF/0A192F?text=TBD"
                                alt="Business Lead"
                                className="team-photo"
                            />
                            <h3 className="team-name">TBD</h3>
                            <p className="team-role">Social Media Lead</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="section alt">
                <div className="container">
                    <h2 className="section-title">
                        Our Journey in{' '}
                        <span className="gradient-text">Pictures</span>
                    </h2>

                    <p className="section-subtitle">
                        From late-night builds in the workshop to the thrill of
                        the racetrack, here's a glimpse into the world of
                        NottsAir.
                    </p>

                    <div className="gallery-grid">
                        <div className="gallery-column">
                            <img
                                className="gallery-image"
                                src="https://placehold.co/500x800/0A192F/38A3A5?text=NA-01+Car"
                                alt="NottsAir Car"
                            />
                            <img
                                className="gallery-image"
                                src="https://placehold.co/500x600/0A192F/38A3A5?text=CAD+Design"
                                alt="CAD Design"
                            />
                        </div>
                        <div className="gallery-column">
                            <img
                                className="gallery-image"
                                src="https://placehold.co/500x600/0A192F/38A3A5?text=Team+Working"
                                alt="Team working on car"
                            />
                            <img
                                className="gallery-image"
                                src="https://placehold.co/500x800/0A192F/38A3A5?text=Track+Day"
                                alt="Car on track"
                            />
                        </div>
                        <div className="gallery-column">
                            <img
                                className="gallery-image"
                                src="https://placehold.co/500x800/0A192F/38A3A5?text=Sensors"
                                alt="Sensor technology"
                            />
                            <img
                                className="gallery-image"
                                src="https://placehold.co/500x600/0A192F/38A3A5?text=Electronics"
                                alt="Electronics work"
                            />
                        </div>
                        <div className="gallery-column">
                            <img
                                className="gallery-image"
                                src="https://placehold.co/500x600/0A192F/38A3A5?text=Competition"
                                alt="Competition day"
                            />
                            <img
                                className="gallery-image"
                                src="https://placehold.co/500x800/0A192F/38A3A5?text=Podium+Finish"
                                alt="Team celebrating"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sponsors & Partners Section */}
            <section id="sponsors" className="section">
                <div className="container">
                    <h2 className="section-title">
                        Our Valued{' '}
                        <span className="gradient-text">
                            Sponsors & Partners
                        </span>
                    </h2>

                    <p className="section-subtitle">
                        Our success is driven by the generous support of our
                        partners. Their contributions provide us with the
                        resources needed to innovate and compete. We are
                        incredibly grateful for their belief in our vision.
                    </p>

                    <div className="sponsors-grid">
                        <img
                            src="https://placehold.co/200x100/F5FBEF/0A192F?text=Sponsor+A"
                            alt="Sponsor Logo 1"
                            className="sponsor-logo"
                        />
                        <img
                            src="https://placehold.co/200x100/F5FBEF/0A192F?text=Sponsor+B"
                            alt="Sponsor Logo 2"
                            className="sponsor-logo"
                        />
                        <img
                            src="https://placehold.co/200x100/F5FBEF/0A192F?text=Sponsor+C"
                            alt="Sponsor Logo 3"
                            className="sponsor-logo"
                        />
                        <img
                            src="https://placehold.co/200x100/F5FBEF/0A192F?text=Sponsor+D"
                            alt="Sponsor Logo 4"
                            className="sponsor-logo"
                        />
                        <img
                            src="https://placehold.co/200x100/F5FBEF/0A192F?text=Sponsor+E"
                            alt="Sponsor Logo 5"
                            className="sponsor-logo"
                        />
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section alt">
                <div className="container">
                    <h2 className="section-title">
                        Get in <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="section-subtitle">
                        Have questions, want to join the team, or interested in
                        sponsoring us? We'd love to hear from you. Reach out
                        through the form below or connect with us on social
                        media.
                    </p>

                    <div className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">
                                Your Name
                            </label>
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
                            <label htmlFor="email" className="form-label">
                                Your Email
                            </label>
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
                            <label htmlFor="message" className="form-label">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-textarea"
                                placeholder="Let us know how we can help..."
                                value={formData.message}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>
                        <button
                            type="button"
                            className="form-submit"
                            onClick={handleFormSubmit}
                        >
                            Send Message
                        </button>
                    </div>
                    {formMessage && (
                        <div className="form-message">{formMessage}</div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Hero;
