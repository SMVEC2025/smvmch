import React from 'react';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import '../assets/css/academic-certificate-courses.css';

const courseList = [
    'Value added course in Hospital Information System',
    'Value added course in NABH for Hospitals',
    'Value added course in fire and safety',
    'Value added course in Hospital Infection Control (CHIC)',
    'Value added course on Environmental health and hygiene',
    'Workshop on Palliative care',
    'Workshop on research methods for post graduates',
    'Workshop on communication skills',
    'Workshop on basic medical and surgical skill',
    'Value added course in basic epidemiology',
    'Workshop on basic presentation and teaching skills',
    'Workshop on EPI Info for post graduates',
    'Workshop on Qualitative Methods in Health Research'
];

const ValueAddedCourses = () => {
    return (
        <>
            <Header />
            <BreadCrumb pageTitle="Value Added Courses" />
            <section className="smv-cert">
                <div className="smv-cert__wrap">
                    <div className="smv-cert__hero">
                        <div>
                            <p className="smv-cert__eyebrow">Academics • Skill Enhancement</p>
                            <h2 className="smv-cert__title">List of Value Added Courses</h2>
                            <p className="smv-cert__subtitle">
                                Professional development offerings that complement the core curriculum with
                                applied skills and focused workshops.
                            </p>
                        </div>
                    </div>

                    <div className="smv-cert__table">
                        <div className="smv-cert__row smv-cert__row--head">
                            <span className="smv-cert__cell smv-cert__cell--id">S.No</span>
                            <span className="smv-cert__cell">Name of the course</span>
                        </div>
                        {courseList.map((course, index) => (
                            <div className="smv-cert__row" key={course}>
                                <span className="smv-cert__cell smv-cert__cell--id">{index + 1}.</span>
                                <span className="smv-cert__cell">{course}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ValueAddedCourses;
