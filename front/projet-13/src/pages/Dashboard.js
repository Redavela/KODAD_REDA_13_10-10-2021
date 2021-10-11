import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import SectionDashboard from '../components/SectionDashboard';

const Dashboard = () => {
    return (
        <div>
            <Navigation/>
            <SectionDashboard/>
            <Footer/>
        </div>
    );
};

export default Dashboard;