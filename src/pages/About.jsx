import React from 'react';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import AboutIntro from '../components/AboutIntro';
import AboutAchievements from '../components/AboutAchievements';
import OurInstitution from '../components/OurInstitution';
import AboutUs from '../components/AboutUs';
import CountUp from '../components/CountUp';
import Instructor from '../components/Instructor';
import Footer from '../components/Footer';

const About = () => {
    return (
        <>
            <Header />
            <BreadCrumb pageTitle="About Us" />
            <AboutIntro />
            <AboutAchievements />
            <OurInstitution />
            {/* <AboutUs /> */}
            {/* <CountUp /> */}
            {/* <Instructor /> */}
            {/* <Footer /> */}
        </>
    );
};

export default About;
