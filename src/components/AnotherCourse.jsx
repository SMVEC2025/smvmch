import React from 'react';
import CourseData from '../jsonData/CourseData.json'
import SingleCourse from '../components/SingleCourse'

const AnotherCourse = (props) => {
    const { spacing } = props;

    return (
        <>
            <section className={`${spacing} another-course-sec pb-70`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sec-title">
                                <h1>Another Course</h1>
                                <p>Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper, auctor suspendisse quisque molestie ut. Elit massa dui, leo enim magna. Cursus maecenas cubilia, ac nonummy, egestas mauris .</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {CourseData.slice(2, 5).map(course =>
                            <div className="col-lg-4" key={course.id}>
                                <SingleCourse course={course} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AnotherCourse;