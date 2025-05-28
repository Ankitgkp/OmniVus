import React from 'react';
import ServicesNavbar from '../components/ServicesNavbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import CoreFeaturesSection from '../components/CoreFeaturesSection';
import LatestServicesSection from '../components/LatestServicesSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CallToActionSection from '../components/CallToActionSection';
import LatestNewsSection from '../components/LatestNewsSection';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <ServicesNavbar showContactInfo={false} />
            <HeroSection />
            <ServicesSection />
            <CoreFeaturesSection />
            <LatestServicesSection />
            <CaseStudiesSection />
            <TeamSection />
            <TestimonialsSection />
            <CallToActionSection />
            <LatestNewsSection />
            <Footer />
        </div>
    );
};


export default Home;