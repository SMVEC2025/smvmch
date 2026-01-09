import React from 'react';
import Header from './Header';
import BreadCrumb from './BreadCrumb';
import ResearchDetailsContent from './ResearchDetailsContent';
import Footer from './Footer';

const ResearchDetails = () => {
    return (
        <>
            <Header />
            <BreadCrumb pageTitle="Research Details" />
            <ResearchDetailsContent />
            <Footer />
        </>
    );
};

export default ResearchDetails;