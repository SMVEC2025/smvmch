import React from 'react';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';
import ErrorPageContent from '../components/ErrorPageContent';

const Error404 = () => {
    return (
        <>
            <Header />
            <BreadCrumb />
            <ErrorPageContent />
            <Footer />
        </>
    );
};

export default Error404;