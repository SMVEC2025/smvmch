import React from 'react';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';
import BlogContent from '../components/BlogContent';

const Blog = () => {
    return (
        <>
            <Header />
            <BreadCrumb pageTitle="Our Blog" />
            <BlogContent />
            <Footer />
        </>
    );
};

export default Blog;