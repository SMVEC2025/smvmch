import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleCourseReview = ({ review }) => {
    let { image, name, subject, text } = review;

    return (
        <>
            <div className="course-review course-instructor">
                <div className="instructor-img">
                    <img src={`/img/client/${image}`} alt="client" />
                </div>
                <div className="details">
                    <h2><Link to="#">{name}</Link></h2>
                    <span>{subject}</span>
                </div>
                <div className="rating">
                    <p>{text}</p>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                </div>
            </div>
        </>
    );
};

export default SingleCourseReview;