import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import SectionSignIn from '../components/SectionSignIn';

const SignIn = () => {
    return (
        <div>
            <Navigation/>
            <SectionSignIn/>
            <Footer/>
        </div>
    );
};

export default SignIn;