import React from 'react';
import './Gallery.css';
import CircularGallery from '../components/CircularGallery';

const Gallery = () => {
    return (
        <div className="container gallery-container">
            <div className="hero-content">
                <h1 className="hero-title">Gallery</h1>
            </div>

            <div className="gallery-section">
                <div style={{ height: '600px', position: 'relative' }}>
                    <CircularGallery
                        bend={1}
                        textColor="#ffffff"
                        borderRadius={0.05}
                        scrollEase={0.02}
                    />
                </div>
            </div>
            <div className="achievements-section">
                <h2 className="section-title">Achievements</h2>
                <div className="achievements-text">
                    <p className="section-subtitle">
                        It’s our very first year competing in the Formula
                        Student AI competition — and we’re going big.
                    </p>
                    <p className="section-subtitle">
                        AIRNotts brings together passionate students from
                        diverse cultural and academic backgrounds, united by a
                        love for motorsport, AI, and cutting-edge technology.
                    </p>
                    <p className="section-subtitle">
                        We’re building an F1-style autonomous racecar and will
                        be taking it to the legendary Silverstone Racetrack — a
                        truly exhilarating challenge at the forefront of
                        automotive engineering!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
