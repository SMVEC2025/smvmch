import React from 'react';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';
import BlogListContent from '../components/BlogListContent';

const BlogList = () => {
    return (
        <>
            <Header />
            <BreadCrumb pageTitle="Blog List" />
            <BlogListContent />
            <Footer />
        </>
    );
};

export default BlogList;