import React from 'react';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';
import Blog2ColumnContent from '../components/Blog2ColumnContent';

const Blog2Column = () => {
    return (
        <>
            <Header />
            <BreadCrumb pageTitle="Blog 2 Column" />
            <Blog2ColumnContent />
            <Footer />
        </>
    );
};

export default Blog2Column;