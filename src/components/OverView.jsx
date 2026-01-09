import React from 'react';
import HomeFaq from './HomeFaq';
import HomeEvent from './HomeEvent';
import { Fade } from 'react-reveal';

const OverView = () => {
    return (
        <>
            <section className="event-sec pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <Fade left delay={300}>
                                <HomeFaq />
                            </Fade>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <Fade right delay={600}>
                                <HomeEvent />
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OverView;