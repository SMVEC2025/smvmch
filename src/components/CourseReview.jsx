import React from 'react';
import CourseReviewData from '../jsonData/CourseReviewData.json'
import SingleCourseReview from './SingleCourseReview';

const CourseReview = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    {CourseReviewData.map(review =>
                        <SingleCourseReview review={review} key={review.id} />
                    )}
                </div>
            </div>
        </>
    );
};

export default CourseReview;