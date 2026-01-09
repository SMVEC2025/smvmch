import React from 'react';
import Header from '../components/Header';
import Researches from '../components/Researches';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';

const Research = () => {
    return (
        <>
            <Header />
            <BreadCrumb pageTitle="Research Page" />
            <Researches />
            <Footer />
        </>
    );
};

export default Research;