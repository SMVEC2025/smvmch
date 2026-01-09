import React from 'react';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import AllEvents from '../components/AllEvents';
import Footer from '../components/Footer';

const Events = () => {
    return (
        <>
            <Header />
            <BreadCrumb pageTitle="Event Page" />
            <AllEvents />
            <Footer />
        </>
    );
};

export default Events;