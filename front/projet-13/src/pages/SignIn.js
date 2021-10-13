import React, {useEffect} from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import SectionSignIn from '../components/SectionSignIn';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

const SignIn = () => {
 let history = useHistory ();
  const isConnected = useSelector (state => state.userReducer);
//   useEffect(() => {
//     if(isConnected.userName !== undefined){
//         history.push("/user")
//     }
// }, [])
  return (
    <div>
      <Navigation />
      <SectionSignIn history={history} isConnected={isConnected} />
      <Footer />
    </div>
  );
};

export default SignIn;
