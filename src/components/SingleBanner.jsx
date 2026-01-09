import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleBanner = ({ banner }) => {
    let { title, text, image } = banner;

    return (
        <>
            <div className="slider">
                <div className="all-slide">
                    <div className="single-slide" style={{ backgroundImage: `url('https://smvmch.ac.in/wp-content/uploads/2023/08/Paediatrics.jpg')` }}>
                        <div className="slider-overlay"></div>
                        <div className="slider-wrapper">
                            <div className="slider-text">
                                <div className="container">
                                    <div className="col-lg-9">
                                        <div className="row">
                                            <div className="slider-caption">
                                                <Fade bottom delay={200}>
                                                    <h1>{title}</h1>
                                                </Fade>
                                                <Fade top delay={300}>
                                                    <p>{text}</p>
                                                </Fade>
                                                <Fade top delay={400}>
                                                    <ul>
                                                        <li><Link to="/about#">learn more</Link></li>
                                                        <li><Link to="/contact#">contact us </Link></li>
                                                    </ul>
                                                </Fade>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBanner;