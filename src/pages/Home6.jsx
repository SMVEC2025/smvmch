import React from 'react';
import Header6 from '../components/Header6';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';
import CoursesV3 from '../components/CoursesV3';
import CountUp from '../components/CountUp';
import Gallery from '../components/Gallery';
import Instructor from '../components/Instructor';
import Testimonial from '../components/Testimonial';
import OverView from '../components/OverView';
import CallToAction from '../components/CallToAction';
import LatestBlogPost from '../components/LatestBlogPost';
import Footer from '../components/Footer';

const Home6 = () => {
    return (
        <>
            <Header6 />
            <Banner />
            <AboutUs />
            <WhyChooseUs />
            <CoursesV3 />
            <CountUp />
            <Gallery />
            <Instructor bgColor="home-v6" />
            <Testimonial />
            <OverView />
            <CallToAction />
            <LatestBlogPost />
            <Footer />
        </>
    );
};

export default Home6;