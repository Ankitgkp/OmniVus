import React from 'react';
import ServicesComponent from '../components/ServicesComponent.jsx';
import ServicesNavbar from '../components/ServicesNavbar.jsx';
import ServicesComponentNew from '../components/ServicesComponentNew.jsx';
import PlansSection from '../components/PlansSection.jsx';
import ServicesNews from '../components/ServicesNews.jsx';
import ServiceFooter from '../components/ServiceFooter.jsx';

const Services = () => {
    return (
        <div>
            <ServicesNavbar />
            <ServicesComponent />
            <ServicesComponentNew />
            <PlansSection />
            <ServicesNews />
            <ServiceFooter />
        </div>
    );
};

export default Services;
