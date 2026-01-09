import React from 'react';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import Events1 from '../components/Events1';
import OurCoreStrength from '../components/OurCoreStrength';
import DepartmentsSection from '../components/DepartmentsSection';
import EnquiryCta from '../components/EnquiryCta';
import Courses from '../components/Courses';
import AnotherCourse from '../components/AnotherCourse';
import CountUp from '../components/CountUp';
import Gallery from '../components/Gallery';
import WhyChooseUs from '../components/WhyChooseUs';
import Instructor from '../components/Instructor';
import Testimonial from '../components/Testimonial';
import OverView from '../components/OverView';
import CallToAction from '../components/CallToAction';
import LatestBlogPost from '../components/LatestBlogPost';
import Footer from '../components/Footer';
import Header from '../components/Header';


const Home1 = () => {
    return (
        <>
            <Header />
            <Banner />
            <AboutUs />
            <Events1 />
            <OurCoreStrength />
            <DepartmentsSection />
            <EnquiryCta />
            <Footer />
        </>
    );
};

export default Home1;