import React from 'react';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';
import EventColumnContent from '../components/EventColumnContent';

const Event3Column = () => {
    return (
        <>
            <Header />
            <BreadCrumb pageTitle="Event 3 Column" />
            <EventColumnContent />
            <Footer />
        </>
    );
};

export default Event3Column;