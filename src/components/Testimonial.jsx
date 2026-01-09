import React from 'react';
import SingleTestimonial from './SingleTestimonial';
import TestimonialData from '../jsonData/TestimonialData.json';
import Carousel from 'react-multi-carousel';

const Testimonial = () => {

    const CustomRightArrow = ({ onClick }) => {
        return <button className='commonArrow arrowRight' onClick={() => onClick()}><i className="fa-solid fa-chevron-right"></i></button>;
    };

    const CustomLeftArrow = ({ onClick }) => {
        return <button className='commonArrow arrowLeft' onClick={() => onClick()}><i className="fa-solid fa-chevron-left"></i></button>;

    };

    return (
        <>
            <section className="testimonial-sec pt-100 pb-100">
                <div className="testimonial-sec-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="offset-md-2 col-md-8 ">
                            <div className="all-testimonial">
                                <div className="testimonial-carousel-wrap">
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
                                            mobile: {
                                                breakpoint: {
                                                    max: 3000,
                                                    min: 1
                                                },
                                                items: 1
                                            }
                                        }}>

                                        {TestimonialData.map(testimonial =>
                                            <SingleTestimonial testimonial={testimonial} key={testimonial.id} />
                                        )}

                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonial;