import React from 'react';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';
import BlogDetailsContent from '../components/BlogDetailsContent';

const BlogDetails = () => {
    return (
        <>
            <Header />
            <BreadCrumb pageTitle="Blog Details" />
            <BlogDetailsContent />
            <Footer />
        </>
    );
};

export default BlogDetails;