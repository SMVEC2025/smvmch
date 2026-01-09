import React from 'react';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import Blog3ColumnContent from '../components/Blog3ColumnContent';
import Footer from '../components/Footer';

const Blog3Column = () => {
    return (
        <>
            <Header />
            <BreadCrumb pageTitle="Blog 3 Column" />
            <Blog3ColumnContent />
            <Footer />
        </>
    );
};

export default Blog3Column;