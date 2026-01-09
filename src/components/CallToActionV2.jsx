import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const CallToActionV2 = () => {
    return (
        <>
            <section className="home-v2 call-to-action-sec">
                <div className="call-to-action-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="call-to-action-text">
                                <Fade left delay={300}>
                                    <h2>contact with us for customer support</h2>
                                </Fade>
                                <Fade left delay={600}>
                                    <p>we are provide 24/7 hours to support.</p>
                                </Fade>
                                <Fade left delay={900}>
                                    <Link to="/contact#" className="btn">get support</Link>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CallToActionV2;