import React from 'react';
import CourseData from '../jsonData/CourseData.json'
import SingleCourse from './SingleCourse';

const AllCourses = () => {
    return (
        <>
            <section className="course-page-sec pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        {CourseData.map(course =>
                            <div className="col-lg-4 col-md-6 col-12" key={course.id}>
                                <SingleCourse course={course} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AllCourses;