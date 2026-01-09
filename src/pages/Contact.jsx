import React from 'react';

import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import ContactContent from '../components/ContactContent';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <>
            <Header />
            <BreadCrumb pageTitle="Contact Us" />
            <ContactContent />
            <Footer />
        </>
    );
};

export default Contact;