import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const CallToAction = () => {
    return (
        <>
            <section className="call-to-action-sec">
                <div className="call-to-action-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-12">
                            <Fade right delay={300}>
                                <div className="call-to-action-text">
                                    <h2>Contact with us for customer support</h2>
                                    <p>We provide 24/7 support to you.</p>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-md-4 col-12">
                            <Fade right delay={600}>
                                <div className="call-to-action-text">
                                    <Link to="/contact#" className="btn">get support</Link>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CallToAction;