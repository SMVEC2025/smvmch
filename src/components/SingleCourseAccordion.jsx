import React from 'react';

const SingleCourseAccordion = ({ curriculum }) => {
    let { CourseId, dataTarget, ariaControls, btnTitle, curriculumTitle, lecture1, lecture2, lecture3, lectureTitle1, lectureTitle2, lectureTitle3, lectureDuration1, lectureDuration2, lectureDuration3 } = curriculum

    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id={CourseId}>
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={dataTarget} aria-expanded="false" aria-controls={ariaControls}>
                        {btnTitle}
                    </button>
                </h2>
                <div id={ariaControls} className="accordion-collapse collapse" aria-labelledby={CourseId} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="curriculum">
                            <p>{curriculumTitle}</p>
                            <div className="course-lesson">
                                <div className="course-left-text">
                                    <span className="course-left-icon">
                                        <i className="fa-regular fa-file-pdf"></i>
                                    </span>
                                    <span className="course-left-title">{lecture1}</span>
                                </div>
                                <div className="course-center-text">
                                    <span>{lectureTitle1}</span>
                                </div>
                                <div className="course-right-text">
                                    <span className="course-right-icon">
                                        <i className="fa fa-clock-o"></i>
                                    </span>
                                    <span className="course-right-time">{lectureDuration1}</span>
                                </div>
                            </div>
                            <div className="course-lesson">
                                <div className="course-left-text">
                                    <span className="course-left-icon">
                                        <i className="fa fa-file-text"></i>
                                    </span>
                                    <span className="course-left-title">{lecture2}</span>
                                </div>
                                <div className="course-center-text">
                                    <span>{lectureTitle2}</span>
                                </div>
                                <div className="course-right-text">
                                    <span className="course-right-icon">
                                        <i className="fa fa-clock-o"></i>
                                    </span>
                                    <span className="course-right-time">{lectureDuration2}</span>
                                </div>
                            </div>
                            <div className="course-lesson">
                                <div className="course-left-text">
                                    <span className="course-left-icon">
                                        <i className="fa fa-play-circle"></i>
                                    </span>
                                    <span className="course-left-title">{lecture3}</span>
                                </div>
                                <div className="course-center-text">
                                    <span>{lectureTitle3}</span>
                                </div>
                                <div className="course-right-text">
                                    <span className="course-right-icon">
                                        <i className="fa fa-clock-o"></i>
                                    </span>
                                    <span className="course-right-time">{lectureDuration3}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleCourseAccordion;