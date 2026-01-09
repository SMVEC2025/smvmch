import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const HeaderTopV2 = () => {
    return (
        <>
            <div className="hd-top-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 d-none d-lg-block">
                            <div className="logo">
                                <Link to="/"><img src="/img/logo/logo.png" alt="logo" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-9 d-none d-lg-block">
                            <div className="contact-intro">
                                <div className="row">
                                    <div className="col-md-4 col-sm-4">
                                        <div className="info-intro">
                                            <div className="info-icon">
                                                <img src="/img/icon/contact.png" alt="contactIcon" />
                                            </div>
                                            <div className="info-text">
                                                <h5>Email Address:</h5>
                                                <a href="mailto:yourdomain@gmail.com">yourdomain@gmail.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4">
                                        <div className="info-intro">
                                            <div className="info-icon">
                                                <img src="/img/icon/phone.png" alt="phoneIcon" />
                                            </div>
                                            <div className="info-text">
                                                <h5>Phone Number:</h5>
                                                <a href="tel:00 0123456789"><span>+00 0123456789</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4">
                                        <div className="info-intro">
                                            <div className="info-icon">
                                                <img src="/img/icon/time.png" alt="timeIcon" />
                                            </div>
                                            <div className="info-text">
                                                <h5>Opening Time:</h5>
                                                <span>Sat-Sun:8:00Am-9:00PM</span>
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

export default HeaderTopV2;