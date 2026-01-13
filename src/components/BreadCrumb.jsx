import React from 'react';
import '../assets/css/breadcrumbs.css';

const BreadCrumb = (props) => {
    const { pageTitle, bgImage } = props;

    return (
        <>
            <section
                className="smv-breadcrumb"
                style={{
                    backgroundImage: `url(${bgImage || '/img/background/page_hd.jpg'})`
                }}
            >
                <div className="smv-breadcrumb__overlay"></div>
                <div className="smv-breadcrumb__inner">
                    <h1 className="smv-breadcrumb__title">{pageTitle ? pageTitle : 'Page'}</h1>
                </div>
            </section>
        </>
    );
};

export default BreadCrumb;
