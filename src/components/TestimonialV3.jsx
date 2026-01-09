import React from 'react';
import TestimonialData from '../jsonData/TestimonialData.json'
import SingleTestimonialV3 from './SingleTestimonialV3';
import Carousel from 'react-multi-carousel';

const TestimonialV3 = () => {

    const CustomRightArrow = ({ onClick }) => {
        return <button className='commonArrow arrowRight' onClick={() => onClick()}><i className="fa-solid fa-chevron-right"></i></button>;
    };

    const CustomLeftArrow = ({ onClick }) => {
        return <button className='commonArrow arrowLeft' onClick={() => onClick()}><i className="fa-solid fa-chevron-left"></i></button>;

    };

    return (
        <>
            <div className="testimonial-v3-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="all-testimonial-v3">
                                <div className="testimonial-carousel-wrap-v3">
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
                                            laptop: {
                                                breakpoint: {
                                                    max: 3000,
                                                    min: 992
                                                },
                                                items: 3,
                                                partialVisibilityGutter: 40
                                            },
                                            mobile: {
                                                breakpoint: {
                                                    max: 991,
                                                    min: 1
                                                },
                                                items: 1,
                                                partialVisibilityGutter: 40
                                            }
                                        }}>

                                        {TestimonialData.map(testimonial =>
                                            <SingleTestimonialV3 testimonial={testimonial} key={testimonial.id} />
                                        )}

                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialV3;