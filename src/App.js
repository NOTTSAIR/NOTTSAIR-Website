import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './pages/Hero';
import Footer from './components/Footer';

const NottsAir = () => {
  return (
    <>
      <div>
        <NavBar />
        <Hero />
        <Footer />
      </div>
    </>
  );
};

export default NottsAir;