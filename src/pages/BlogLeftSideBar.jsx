import React from 'react';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';
import BlogLeftSideBarContent from '../components/BlogLeftSideBarContent';

const BlogLeftSideBar = () => {
    return (
        <>
            <Header />
            <BreadCrumb pageTitle="Blog Left Sidebar" />
            <BlogLeftSideBarContent />
            <Footer />
        </>
    );
};

export default BlogLeftSideBar;