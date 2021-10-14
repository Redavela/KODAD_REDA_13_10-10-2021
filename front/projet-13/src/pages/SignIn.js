import React, {useEffect} from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import SectionSignIn from '../components/SectionSignIn';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {login} from "../actions/user.action";

const SignIn = props => {
  const isConnected = useSelector (state => state.userReducer);

  return (
    <div>
      <Navigation props={props}  isConnected={isConnected}/>
      <SectionSignIn props={props} isConnected={isConnected} />
        <Footer />
    </div>
  );
};

export default SignIn;
