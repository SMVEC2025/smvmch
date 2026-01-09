import React from 'react';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';
import CourseIsotopContent from '../components/CourseIsotopContent';

const Gallery = () => {
    return (
        <>
            <Header />
            <BreadCrumb pageTitle="Gallery Page" />
            <CourseIsotopContent />
            <Footer />
        </>
    );
};

export default Gallery;