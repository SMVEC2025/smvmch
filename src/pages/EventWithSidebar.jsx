import React from 'react';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import SidebarEvents from '../components/SidebarEvents';
import Footer from '../components/Footer';

const EventWithSidebar = () => {
    return (
        <>
            <Header />
            <BreadCrumb pageTitle="Event With Sidebar" />
            <SidebarEvents />
            <Footer />
        </>
    );
};

export default EventWithSidebar;