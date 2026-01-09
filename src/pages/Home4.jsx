import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import WhyChooseUsV2 from '../components/WhyChooseUsV2';
import Courses from '../components/Courses';
import AboutUs from '../components/AboutUs';
import CountUp from '../components/CountUp';
import Gallery from '../components/Gallery';
import Instructor from '../components/Instructor';
import Testimonial from '../components/Testimonial';
import OverView from '../components/OverView';
import CallToAction from '../components/CallToAction';
import LatestBlogPost from '../components/LatestBlogPost';
import BecomeInstructor from '../components/BecomeInstructor';
import Footer from '../components/Footer';

const Home4 = () => {
    return (
        <>
            <Header />
            <Banner />
            <WhyChooseUsV2 />
            <AboutUs />
            <Courses />
            <CountUp />
            <Gallery />
            <Instructor bgColor="home-v4" />
            <Testimonial />
            <OverView />
            <CallToAction />
            <LatestBlogPost />
            <BecomeInstructor />
            <Footer />
        </>
    );
};

export default Home4;