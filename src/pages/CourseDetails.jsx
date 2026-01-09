import React from 'react';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';
import CourseDetailsContent from '../components/CourseDetailsContent';

const CourseDetails = () => {
    return (
        <>
            <Header />
            <BreadCrumb pageTitle="Course Details" />
            <CourseDetailsContent />
            <Footer />
        </>
    );
};

export default CourseDetails;