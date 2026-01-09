import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleCourseV3 = ({ course }) => {
    let { title, courseImage, courseDetails, teacherImage, teacherName, courseTitle, coursePrice, seats, hours, status } = course;

    return (
        <>
            <Fade>
                <div className="course-inner">
                    <div className="course-thumb">
                        <img src={`/img/courses/${courseImage}`} alt="courseImage" />
                        <div className="read-more-button">
                            <Link to="/course#">Read More</Link>
                        </div>
                    </div>
                    <div className="course-desc">
                        <h2><Link to="/course#">{title}</Link></h2>
                        <p>{courseDetails}</p>
                    </div>
                    <div className="course-instructor-info">
                        <div className="course-instructor-left">
                            <div className="instructor-thumb">
                                <img src={`/img/courses/${teacherImage}`} alt="teacherImage" />
                            </div>
                            <div className="instructor-info">
                                <h4>{teacherName}</h4>
                                <span>{courseTitle}</span>
                                <div className="course-rating">
                                    <span className="course-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="course-instructor-right">
                            <span className="course-price">${coursePrice}</span>
                        </div>
                    </div>
                    <div className="course-info">
                        <ul>
                            <li><Link to="#"><i className="fa fa-user"></i>{seats}</Link></li>
                            <li><Link to="#"><i className="fa fa-clock-o"></i>{hours}</Link></li>
                            <li><Link to="#"><i className="fa fa-heart"></i>{status}</Link></li>
                        </ul>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleCourseV3;