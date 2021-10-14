import React, {useEffect} from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import SectionDashboard from '../components/SectionDashboard';
import {useSelector} from 'react-redux';

const Dashboard = props => {
 useSelector (state => console.log (state));
  //useSelector selectionner un donnée dans le store
  const isConnected = useSelector (state => state.userReducer);
  // console.log(props)
  useEffect (() => {
    if (isConnected.user === undefined) {
      console.log (
        'Vous n"etes pas authentifier, redirection page sign in',
        isConnected.user
      );
      props.history.push ({
        pathname: '/signin',
      });
    }
  }, []);

  return (
    <div>
      <Navigation props={props} isConnected={isConnected} />
      <SectionDashboard props={props} isConnected={isConnected} />
      <Footer />
    </div>
  );
};

export default Dashboard;
