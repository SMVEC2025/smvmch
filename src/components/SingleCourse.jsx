import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleCourse = ({ course }) => {
    let { courseImage, teacherImage, coursePrice, courseTitle, courseDetails, seats, hours, status } = course

    return (
        <>
            <div className="course-inner">
                <div className="course-thumb">
                    <img src={`/img/courses/${courseImage}`} alt="courseImage" />
                    <div className="teacher-thumb">
                        <img src={`/img/courses/${teacherImage}`} alt="teacherImage" />
                    </div>
                    <div className="read-more-button">
                        <Link to="/course#">Learn More</Link>
                    </div>
                </div>
                <div className="course-meta">
                    <span className="course-price">${coursePrice}</span>
                    <span className="course-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </span>
                </div>
                <div className="course-desc">
                    <h2><Link to="/course#">{courseTitle}</Link></h2>
                    <p>{courseDetails}</p>
                </div>
                <div className="course-info">
                    <ul>
                        <li><Link to="#"><i className="fa fa-user"></i>{seats}</Link></li>
                        <li><Link to="#"><i className="fa fa-clock-o"></i>{hours}</Link></li>
                        <li><Link to="#"><i className="fa fa-heart"></i>{status}</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SingleCourse;