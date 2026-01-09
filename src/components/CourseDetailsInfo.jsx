import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const CourseDetailsInfo = () => {
    return (
        <>
            <div className="event-details-info">
                <h2>Course Info</h2>
                <ul>
                    <li>Instructor:<span>Alex</span></li>
                    <li>Lectures:<span>15</span></li>
                    <li>Quizzes:<span>50</span></li>
                    <li>Seat Availble:<span>45</span></li>
                    <li>Duration:<span>4 Week</span></li>
                    <li>Course Price:<span>$45</span></li>
                    <li>Rating:<span><img src="img/rating.png" alt="" /></span></li>
                </ul>
                <div className="get-course-btn">
                    <Link to="#">Get Course</Link>
                </div>
            </div>
        </>
    );
};

export default CourseDetailsInfo;