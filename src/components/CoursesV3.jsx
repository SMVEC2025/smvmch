import React from 'react';
import { Fade } from 'react-reveal';
import CourseData from '../jsonData/CourseData.json'
import SingleCourseV3 from './SingleCourseV3';

const CoursesV3 = () => {
    return (
        <>
            <section className="course-style2 another-course-sec pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sec-title">
                                <Fade top delay={300}>
                                    <h1>Our Course</h1>
                                </Fade>
                                <Fade top delay={600}>
                                    <p>Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper, auctor suspendisse quisque molestie ut. Elit massa dui, leo enim magna. Cursus maecenas cubilia, ac nonummy, egestas mauris .</p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {CourseData.slice(0, 3).map(course =>
                            <div className="col-xl-4 col-lg-6 col-12" key={course.id}>
                                <SingleCourseV3 course={course} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CoursesV3;