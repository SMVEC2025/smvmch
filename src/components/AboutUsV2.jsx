import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const AboutUsV2 = () => {
    return (
        <>
            <section className="about-us-sec pt-100 ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="about-desc">
                                <Fade left delay={200}>
                                    <h1>Welcome To Our learapress</h1>
                                </Fade>
                                <Fade left delay={400}>
                                    <p>Lorem ipsum dolor sit amet, justo nunc orci donec sagittis metus dapibus, erat ullamcorper odio augue eleifend, consequat enim ullamcorper magnis dignissim nec phasellus, Lorem ipsum dolor sit amet, justo nunc orci donec sagittis metus dapibus, erat Lorem ipsum dolor sit amet, justo nunc orci donec sagittis metus dapibus, erat ullamcorper odio augue eleifend, consequat enim ullamcorper magnis dignissim nec phasellus, Lorem ipsum dolor sit amet, justo nunc orci donec sagittis metus dapibus, erat ullamcorper odio augue eleifend, consequat enim</p>
                                    <p>Lorem ipsum dolor sit amet, justo nunc orci donec sagittis metus dapibus, erat ullamcorper odio augue eleifend, consequat enim .</p>
                                </Fade>
                                <Fade left delay={600}>
                                    <Link to="/about#" className="about-btn">Read More</Link>
                                </Fade>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <Fade right delay={800}>
                                <div className="single-img-inner">
                                    <img src="/img/about/about-us.png" alt="aboutImage" />
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUsV2;