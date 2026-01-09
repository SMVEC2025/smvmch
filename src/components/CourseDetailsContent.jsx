import React from 'react';
import CourseDetailsInfo from './CourseDetailsInfo';
import CourseOverView from './CourseOverView';
import CourseCurriculum from './CourseCurriculum';
import CourseInstructor from './CourseInstructor';
import CourseReview from './CourseReview';
import CourseWriteReview from './CourseWriteReview';

const CourseDetailsContent = () => {
    return (
        <>
            <section className="course-details-page pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="course-tab">
                                <ul className="service-tab nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role='presentation'>
                                        <button className="nav-link active" id="overview-tab" data-bs-target="#overview-tab-pane" data-bs-toggle="tab" type="button" role="tab" aria-controls="overview-tab-pane" aria-selected="true">Course Overview</button>
                                    </li>
                                    <li className="nav-item" role='presentation'>
                                        <button className="nav-link" id="curriculum-tab" data-bs-target="#curriculum-tab-pane" data-bs-toggle="tab" type="button" role="tab" aria-controls="curriculum-tab-pane" aria-selected="false">Course Curriculum</button>
                                    </li>
                                    <li className="nav-item" role='presentation'>
                                        <button className="nav-link" id="instructor-tab" data-bs-target="#instructor-tab-pane" data-bs-toggle="tab" type="button" role="tab" aria-controls="instructor-tab-pane" aria-selected="false">Course Instructor</button>
                                    </li>
                                    <li className="nav-item" role='presentation'>
                                        <button className="nav-link" id="course_review-tab" data-bs-target="#course_review-tab-pane" data-bs-toggle="tab" type="button" role="tab" aria-controls="course_review-tab-pane" aria-selected="false">Course Review</button>
                                    </li>
                                    <li className="nav-item" role='presentation'>
                                        <button className="nav-link" id="write_review-tab" data-bs-target="#write_review-tab-pane" data-bs-toggle="tab" type="button" role="tab" aria-controls="write_review-tab-pane" aria-selected="false">Write Review</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8">
                            <div className="tab-content" id="myTabContent">

                                {/* --- OverView --- */}
                                <div id="overview-tab-pane" tabIndex="0" className="tab-pane fade show active" role="tabpanel" aria-labelledby="overview-tab">
                                    <CourseOverView />
                                </div>

                                {/* --- curriculum --- */}
                                <div id="curriculum-tab-pane" tabIndex="0" className="tab-pane fade" role="tabpanel" aria-labelledby="curriculum-tab">
                                    <CourseCurriculum />
                                </div>

                                {/* --- instructor --- */}
                                <div id="instructor-tab-pane" tabIndex="0" className="tab-pane fade" role="tabpanel" aria-labelledby="instructor-tab">
                                    <CourseInstructor />
                                </div>

                                {/* --- course_review --- */}
                                <div id="course_review-tab-pane" tabIndex="0" className="tab-pane fade" role="tabpanel" aria-labelledby="course_review-tab">
                                    <CourseReview />
                                </div>

                                {/* --- write_review --- */}
                                <div id="write_review-tab-pane" tabIndex="0" className="tab-pane fade" role="tabpanel" aria-labelledby="write_review-tab">
                                    <CourseWriteReview />
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-8">
                            <CourseDetailsInfo />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CourseDetailsContent;