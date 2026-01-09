import React from 'react';
import Header3 from '../components/Header3';
import Banner from '../components/Banner';
import AboutUsV2 from '../components/AboutUsV2';
import Courses from '../components/Courses';
import CountUp from '../components/CountUp';
import TestimonialV3 from '../components/TestimonialV3';
import InstructorV2 from '../components/InstructorV2';
import CallToAction from '../components/CallToAction';
import OverView from '../components/OverView';
import LatestBlogPost from '../components/LatestBlogPost';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';

const Home3 = () => {
    return (
        <>
            <Header3 />
            <Banner />
            <AboutUsV2 />
            <Courses />
            <CountUp />
            <Gallery />
            <TestimonialV3 />
            <InstructorV2 />
            <CallToAction />
            <OverView />
            <LatestBlogPost blogBg="home-v3" />
            <Footer />
        </>
    );
};

export default Home3;