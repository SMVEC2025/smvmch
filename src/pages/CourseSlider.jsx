import React from 'react';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';
import CourseSliderContent from '../components/CourseSliderContent';

const CourseSlider = () => {
    return (
        <>
            <Header />
            <BreadCrumb pageTitle="Course Slider" />
            <CourseSliderContent />
            <Footer />
        </>
    );
};

export default CourseSlider;