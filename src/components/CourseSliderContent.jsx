import React from 'react';
import CourseData from '../jsonData/CourseData.json'
import SingleCourse from './SingleCourse';
import Carousel from 'react-multi-carousel';

const CourseSliderContent = () => {

    const CustomRightArrow = ({ onClick }) => {
        return <button className='commonArrow arrowRight' onClick={() => onClick()}><i className="fa-solid fa-chevron-right"></i></button>;
    };

    const CustomLeftArrow = ({ onClick }) => {
        return <button className='commonArrow arrowLeft' onClick={() => onClick()}><i className="fa-solid fa-chevron-left"></i></button>;
    };

    return (
        <>
            <section className="course-slider-page pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sec-title">
                                <h1>Our Feature Course</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="course-list-sec">
                            <div className="all-course">
                                <div className="course-carousel-slider">
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

                                        {CourseData.map(course =>
                                            <SingleCourse key={course.id} course={course} />
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

export default CourseSliderContent;