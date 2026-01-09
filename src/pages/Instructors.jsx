import React from 'react';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';
import AllInstructor from '../components/AllInstructor';

const Instructors = () => {
    return (
        <>
            <Header />
            <BreadCrumb pageTitle="Our Instructor" />
            <AllInstructor />
            <Footer />
        </>
    );
};

export default Instructors;