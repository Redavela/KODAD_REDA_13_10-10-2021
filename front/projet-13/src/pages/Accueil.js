import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import SectionAccueil from '../components/SectionAccueil';


const Accueil = () => {
  return (
    <div> 
      <main>
        <Navigation/>
        <Hero/>
        <SectionAccueil/>
        <Footer/>
      </main>
    </div>
  );
};

export default Accueil;
