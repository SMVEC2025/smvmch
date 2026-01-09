import React from 'react';
import Header5 from '../components/Header5';
import Banner from '../components/Banner';
import WhyChooseUsV3 from '../components/WhyChooseUsV3';
import Courses from '../components/Courses';
import AboutUs from '../components/AboutUs';
import CountUp from '../components/CountUp';
import Gallery from '../components/Gallery';
import Instructor from '../components/Instructor';
import Testimonial from '../components/Testimonial';
import OverView from '../components/OverView';
import CallToAction from '../components/CallToAction';
import LatestBlogPost from '../components/LatestBlogPost';
import Footer from '../components/Footer';

const Home5 = () => {
    return (
        <>
            <Header5 />
            <Banner />
            <WhyChooseUsV3 />
            <Courses />
            <AboutUs bgGray="home-v5" />
            <CountUp />
            <Gallery />
            <Instructor bgColor="home-v5" />
            <Testimonial />
            <OverView />
            <CallToAction />
            <LatestBlogPost />
            <Footer />
        </>
    );
};

export default Home5;