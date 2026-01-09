import React from 'react';
import CourseCurriculumData from '../jsonData/CourseCurriculumData.json'
import SingleCourseAccordion from './SingleCourseAccordion';

const CourseCurriculum = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="faq-sec">
                        <div className="accordion" id="accordionExample">
                            {CourseCurriculumData.map(curriculum =>
                                <SingleCourseAccordion curriculum={curriculum} key={curriculum.id} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseCurriculum;