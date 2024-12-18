import React, { useRef, useState, useEffect } from 'react';
import Topbar from './components/Topbar';
import Slider from './components/Slider';
import Banner from './components/Banner';
import AnimatedIcons from './components/StrapBand';
import LevelsOfLearning from './components/Gallery';
import Programs from './components/Tiles';
import Features from './components/Features';
import PhotoGallary from './components/PhotoGallary';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  const sliderRef = useRef(null);
  const aboutRef = useRef(null);
  const programsRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToSection = (section) => {
    const refs = {
      slider: sliderRef,
      about: aboutRef,
      programs: programsRef,
      gallery: galleryRef,
      contact: contactRef,
    };

    refs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setShowScrollToTop(scrollY > 200); // Show button after scrolling down 200px
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Topbar scrollToSection={scrollToSection} />
      <div ref={sliderRef}>
        <Slider />
      </div>
      <div ref={aboutRef}>
        <Banner />
      </div>
      <AnimatedIcons />
      <div>
        <LevelsOfLearning />
      </div>
      <Features />
      <div ref={programsRef}>
        <Programs />
      </div>
      <div ref={galleryRef}>
        <PhotoGallary />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default App;
