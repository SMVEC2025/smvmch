import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const BecomeInstructor = () => {
    return (
        <>
            <div className="become-instructor-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="instructor-sec-area">
                                <div className="become-instructor-desc">
                                    <Fade top delay={300}>
                                        <h1>Become an instruction</h1>
                                    </Fade>
                                    <Fade top delay={600}>
                                        <p>100+ instruction are already join us. So you can join with us & earn more money</p>
                                    </Fade>
                                    <div className="become-instructor-button">
                                        <Fade top delay={900}>
                                            <Link to="/instructors#">Join Now</Link>
                                        </Fade>
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

export default BecomeInstructor;