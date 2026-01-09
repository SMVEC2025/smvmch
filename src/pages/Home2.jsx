import React from 'react';
import Banner from '../components/Banner';
import Header2 from '../components/Header2';
import WhyChooseH2 from '../components/WhyChooseH2';
import CoursesH2 from '../components/CoursesH2';
import AnotherCourse from '../components/AnotherCourse';
import JoinUs from '../components/JoinUs';
import Instructor from '../components/Instructor';
import TestimonialH2 from '../components/TestimonialH2';
import Event from '../components/Event';
import CallToActionV2 from '../components/CallToActionV2';
import LatestBlogPost from '../components/LatestBlogPost';
import Footer from '../components/Footer';

const Home2 = () => {
    return (
        <>
            <Header2 />
            <Banner />
            <WhyChooseH2 />
            <CoursesH2 courseV2="home-v2" />
            <AnotherCourse spacing="pt-100" />
            <JoinUs />
            <Instructor roundedImage="home-v2" />
            <TestimonialH2 />
            <Event />
            <CallToActionV2 />
            <LatestBlogPost blogStyle="home-v2" />\
            <Footer />
        </>
    );
};

export default Home2;