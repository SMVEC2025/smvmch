import React from 'react';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';
import FaqContent from '../components/FaqContent';

const Faq = () => {
    return (
        <>
            <Header />
            <BreadCrumb pageTitle="Faq" />
            <FaqContent />
            <Footer />
        </>
    );
};

export default Faq;