import React from 'react';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';
import CourseIsotopContent from '../components/CourseIsotopContent';

const CourseIsotop = () => {
    return (
        <>
            <Header />
            <BreadCrumb pageTitle="Course Isotop Page" />
            <CourseIsotopContent />
            <Footer />
        </>
    );
};

export default CourseIsotop;