import React from 'react';
import './About.css';
import { qr, Gallery1 } from '../assets';
import * as assets from '../assets';

const About = () => {
    return (
        <main>
            <section id="about-hero" className="section">
                <div className="container">
                    <div className="about-image-container">
                        <img
                            src={Gallery1}
                            alt="NottsAir Team"
                            className="about-hero-image"
                        />
                    </div>
                    <h1 className="section-title">
                        Get to <span className="gradient-text">Know Us</span>
                    </h1>
                    <p className="section-subtitle">
                        We are NottsAir, a team of innovators, engineers, and
                        racing enthusiasts from the University of Nottingham.
                        Our story is one of ambition, collaboration, and the
                        relentless pursuit of excellence in the field of
                        autonomous racing. We are driven by a shared passion to
                        build the future of motorsport, one line of code and one
                        lap at a time.
                    </p>
                </div>
            </section>

            <section id="teams" className="section alt">
                <div className="container">
                    <h2 className="section-title">
                        Meet Our <span className="gradient-text">Teams</span>
                    </h2>
                    <p className="section-subtitle">
                        Our success is built on the synergy of specialized
                        sub-teams, each mastering a critical aspect of
                        autonomous vehicle development.
                    </p>
                    <div className="teams-grid">
                        <div className="team-info-card">
                            <img
                                src={assets.perGif}
                                alt="Perception Team"
                                className="team-info-image"
                            />
                            <h3 className="team-info-title">Perception</h3>
                            <p className="team-info-description">
                                Our Perception team develops the vehicle's eyes
                                — fusing camera, LiDAR, and other sensor data to
                                detect cones, track positions, and build an
                                understanding of the race track in real time.
                            </p>
                        </div>
                        <div className="team-info-card">
                            <img
                                src={assets.pathPlanningGif}
                                alt="Path Planning Team"
                                className="team-info-image"
                            />
                            <h3 className="team-info-title">Path Planning</h3>
                            <p className="team-info-description">
                                Path Planning figures out the fastest and safest
                                racing line based on the perceived environment.
                                It dynamically plans routes, dodges obstacles,
                                and selects optimal trajectories for each lap.
                            </p>
                        </div>
                        <div className="team-info-card">
                            <img
                                src={assets.controlGif}
                                alt="Control Team"
                                className="team-info-image"
                            />
                            <h3 className="team-info-title">Control</h3>
                            <p className="team-info-description">
                                Control takes the planned path and turns it into
                                physical action — managing steering, throttle,
                                and braking to execute precise, responsive, and
                                safe vehicle manoeuvres.
                            </p>
                        </div>
                        <div className="team-info-card">
                            <img
                                src={assets.bussGif}
                                alt="Business Team"
                                className="team-info-image"
                            />
                            <h3 className="team-info-title">Business</h3>
                            <p className="team-info-description">
                                The Business team handles sponsorship,
                                marketing, and outreach — securing partnerships,
                                managing finances, and promoting the team’s
                                mission and successes.
                            </p>
                        </div>
                        <div className="team-info-card">
                            <img
                                src={assets.webGif}
                                alt="WebDev Team"
                                className="team-info-image"
                            />
                            <h3 className="team-info-title">WebDev</h3>
                            <p className="team-info-description">
                                The WebDev team designs, develops, and maintains
                                our digital presence, ensuring our website is
                                modern, informative, and accessible to all
                                supporters and team members.
                            </p>
                        </div>
                        <div className="team-info-card">
                            <img
                                src={assets.socialGif}
                                alt="Social Media Team"
                                className="team-info-image"
                            />
                            <h3 className="team-info-title">Social Media</h3>
                            <p className="team-info-description">
                                The Social Media team shares our journey,
                                achievements, and events with the world,
                                engaging our audience and growing our community
                                across platforms.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="join-us" className="section">
                <div className="container join-us-container">
                    <div className="join-us-text">
                        <h2 className="section-title">
                            Join the <span className="gradient-text">Team</span>
                        </h2>
                        <p className="section-subtitle">
                            Ready to shape the future of autonomous racing? We
                            are always looking for passionate and talented
                            students to join us. Scan the QR code or click the
                            link to apply.
                        </p>
                        <a
                            href="https://forms.cloud.microsoft/e/f6kEXKqdMF?origin=lprLink"
                            className="hero-button primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Apply Now
                        </a>
                    </div>
                    <div className="join-us-qr">
                        <img id="qr-image" src={qr} alt="Join Us QR Code" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
