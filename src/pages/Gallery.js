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
                        2025 was our very first year competing in Formula Student AI at Silverstone, 
                        representing the University of Nottingham on the international stage.
                    </p>

                    <p className="section-subtitle">
                        We successfully passed all static inspections and achieved the following results:
                    </p>

                    <div className="section-subtitle results-list">
                        <p>Design: 15th place with a score of 107.1</p>
                        <p>Simulation Development: 16th place with a score of 39.8</p>
                        <p>Real World AI: 19th place with a score of 51.8</p>
                        <p>Presentation: 22nd place with a score of 54.8</p>
                        <p>Overall Statics: 20th place with a score of 253.5</p>
                    </div>

                    <p className="section-subtitle">
                        These achievements mark an excellent foundation for a debut season against established teams worldwide.
                    </p>

                    <p className="section-subtitle">
                        With our first competition complete, the team is now focused on getting the car running on track in 2026, 
                        bringing together our work in perception, planning and control to achieve fully autonomous racing at Silverstone.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
