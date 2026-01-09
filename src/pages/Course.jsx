import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import BreadCrumb from '../components/BreadCrumb';
import AllCourses from '../components/AllCourses';
import Footer from '../components/Footer';

const Course = () => {
    return (
        <>
            <Header />
            <BreadCrumb pageTitle="Course Page" />
            <AllCourses />
            <Footer />
        </>
    );
};

export default Course;