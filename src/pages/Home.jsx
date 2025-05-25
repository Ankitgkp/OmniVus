import React from 'react';
import Navbar from '../components/Navbar';  
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import CoreFeaturesSection from '../components/CoreFeaturesSection';
import LatestServicesSection from '../components/LatestServicesSection';


const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <ServicesSection/>
            <CoreFeaturesSection />
            <LatestServicesSection />
        </div>
    );
};

export default Home;
