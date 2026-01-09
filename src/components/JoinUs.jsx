import React from 'react';
import { Fade } from 'react-reveal';
import InstructorData from "../jsonData/InstructorData.json"
import RegistrationForm from './RegistrationForm';
import SingleAddedStudent from './SingleAddedStudent';
import Carousel from 'react-multi-carousel';

const JoinUs = () => {

    const CustomRightArrow = ({ onClick }) => {
        return <button className='commonArrow arrowRight' onClick={() => onClick()}><i className="fa-solid fa-chevron-right"></i></button>;
    };

    const CustomLeftArrow = ({ onClick }) => {
        return <button className='commonArrow arrowLeft' onClick={() => onClick()}><i className="fa-solid fa-chevron-left"></i></button>;

    };

    return (
        <>
            <div className="join-us-sec">
                <div className="join-us-sec-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-12">
                            <Fade left>
                                <div className="join-us-desc">
                                    <h1>Register now & <span>Get 150+ free course</span> limite time offer</h1>
                                    <p>Join us for our online platform and get 150+ free course. Short Time This offer Limited. So You can as soon as possible register now. Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper, auctor suspendisse quisque molestie ut.</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-10">
                                        <div className="register-recently-added">
                                            <h2>Recently Added Student</h2>
                                            <div className="all-recently-added">
                                                <div className="register-carousel-wrap">
                                                    <Carousel
                                                        infinite={true}
                                                        draggable={true}
                                                        arrows={true}
                                                        pauseOnHover={true}
                                                        slidesToSlide={1}
                                                        showDots={false}
                                                        swipeable={true}
                                                        autoPlay={false}
                                                        customRightArrow={<CustomRightArrow />}
                                                        customLeftArrow={<CustomLeftArrow />}
                                                        autoPlaySpeed={3000}
                                                        responsive={{
                                                            desktop: {
                                                                breakpoint: {
                                                                    max: 3000,
                                                                    min: 1200
                                                                },
                                                                items: 4,
                                                                partialVisibilityGutter: 40
                                                            },
                                                            laptop: {
                                                                breakpoint: {
                                                                    max: 1199,
                                                                    min: 500
                                                                },
                                                                items: 3,
                                                                partialVisibilityGutter: 40
                                                            },
                                                            tablet: {
                                                                breakpoint: {
                                                                    max: 499,
                                                                    min: 351
                                                                },
                                                                items: 2,
                                                                partialVisibilityGutter: 40
                                                            },
                                                            mobile: {
                                                                breakpoint: {
                                                                    max: 350,
                                                                    min: 1
                                                                },
                                                                items: 1,
                                                                partialVisibilityGutter: 40
                                                            }
                                                        }}>

                                                        {InstructorData.map(instructor =>
                                                            <SingleAddedStudent instructor={instructor} key={instructor.id} />
                                                        )}

                                                    </Carousel>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>

                        <div className="col-lg-5 col-12">
                            <Fade right>
                                <RegistrationForm />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JoinUs;