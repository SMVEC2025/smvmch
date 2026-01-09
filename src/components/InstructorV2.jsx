import React from 'react';
import InstructorData from '../jsonData/InstructorData.json'
import SingleInstructorV2 from './SingleInstructorV2';
import Carousel from 'react-multi-carousel';

const InstructorV2 = () => {

    const CustomRightArrow = ({ onClick }) => {
        return <button className='commonArrow arrowRight' onClick={() => onClick()}><i className="fa-solid fa-chevron-right"></i></button>;
    };

    const CustomLeftArrow = ({ onClick }) => {
        return <button className='commonArrow arrowLeft' onClick={() => onClick()}><i className="fa-solid fa-chevron-left"></i></button>;

    };

    return (
        <>
            <section className="instructor-sec-home-v3 pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sec-title">
                                <h1>Expert Instructor</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="all-instructor">
                            <div className="instructor-carousel-wrap-v2">
                                <Carousel
                                    infinite={true}
                                    draggable={true}
                                    arrows={true}
                                    pauseOnHover={true}
                                    slidesToSlide={1}
                                    showDots={false}
                                    swipeable={true}
                                    autoPlay={false}
                                    autoPlaySpeed={3000}
                                    customRightArrow={<CustomRightArrow />}
                                    customLeftArrow={<CustomLeftArrow />}
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
                                                min: 992
                                            },
                                            items: 3,
                                            partialVisibilityGutter: 40
                                        },
                                        tablet: {
                                            breakpoint: {
                                                max: 991,
                                                min: 768
                                            },
                                            items: 2,
                                            partialVisibilityGutter: 40
                                        },
                                        mobile: {
                                            breakpoint: {
                                                max: 767,
                                                min: 1
                                            },
                                            items: 1,
                                            partialVisibilityGutter: 40
                                        }
                                    }}>

                                    {InstructorData.map(instructor =>
                                        <SingleInstructorV2 instructor={instructor} key={instructor.id} />
                                    )}

                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default InstructorV2;