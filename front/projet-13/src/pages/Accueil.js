import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import SectionAccueil from '../components/SectionAccueil';
import {useSelector} from 'react-redux';

const Accueil = props => {
  const isConnected = useSelector (state => state.userReducer);
  return (
    <div> 
      <main>
        <Navigation props={props} isConnected={isConnected}/>
        <Hero/>
        <SectionAccueil/>
        <Footer/>
      </main>
    </div>
  );
};

export default Accueil;
