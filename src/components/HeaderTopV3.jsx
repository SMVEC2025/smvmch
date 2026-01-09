import React from 'react';
import SocialShare from './SocialShare';

const HeaderTopV3 = () => {
    return (
        <>
            <div className="hd-top-v2-sec home-v6 d-none d-lg-block">
                <div className="hd-top-v2-sec-overlay"></div>
                <div className="container">
                    <div className="row ">
                        <div className="col-md-3">
                            <div className="contact-info">
                                <div className="info-box">
                                    <span className="info-title">phone</span>
                                    <a href="tel:+880 123456789"><span>+880 123456789</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="contact-info">
                                <div className="info-box">
                                    <span className="info-title">E-mail</span>
                                    <a href="mailto:info@learapress.com"> <span>info@learapress.com</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="contact-info">
                                <div className="info-box">
                                    <span className="info-title">Office Time</span>
                                    <span>02am - 04pm</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="social-profile">
                                <SocialShare />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTopV3;