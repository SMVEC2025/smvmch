import React from 'react';
import { Fade } from 'react-reveal';
import Pulse from 'react-reveal/Pulse';
import { HashLink as Link } from 'react-router-hash-link';
import videoThumb from '/img/about/video_thumb.jpg'

const AboutUs = (props) => {
    const { bgGray } = props;

    return (
        <>
            <section className={`${bgGray} about-us-sec pt-100 pb-70`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="about-desc">
                                <Fade left delay={200}>
                                    <h1>Welcome To SMVMCH</h1>
                                </Fade>
                                <Fade left delay={400}>
                                    <p>At Sri Manakula Vinayagar Medical College and Hospital, healthcare begins with empathy and is strengthened by knowledge.
                                        We are a living ecosystem where classrooms extend into wards and learning is shaped by real lives.
                                        Every patient encounter becomes a lesson, and every lesson evolves into better care.
                                        Technology, ethics, and human touch work together at the heart of everything we do.
                                        Here, medicine is not just practiced—it is understood, taught, and continuously redefined.</p>
                                </Fade>
                                <Pulse delay={600}>
                                    <Link to="/about#" className="about-btn">Read More</Link>
                                </Pulse>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <Fade right delay={900}>
                                <div className="video-inner">
                                    <img src={videoThumb} alt="video_thumb" />
                                    <div className="video-overly">
                                        <div className="video-button">
                                            <a target='_blank' href="https://www.youtube.com/watch?v=YzDz8g1z83U" className="mfp-iframe video-play"></a>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;