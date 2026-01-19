import React from 'react';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import '../assets/css/academic-certificate-courses.css';

const courseList = [
    'Certificate Course on First Aid',
    'Certificate Course on Basic life support',
    'Certificate Course on Universal Precautions and Bio-Medical Waste Management',
    'Certificate Course on Communication skills',
    'Certificate Course on Chemicals and Fire safety',
    'Certificate Course on Documentation',
    'Certificate Course on Immunization',
    'Certificate Course on Enhancement of language skills',
    'Certificate Course on Professional ethics',
    'Certificate Course on Enhancement of Computer skills',
    'Certificate Course on Prescription writing',
    'Certificate Course on Primary care physician',
    'Certificate Course on Data Analytics in Health Care',
    'Certificate Course in Public Health',
    'Certificate Course on Safe Practices in Blood Transfusion',
    'Certificate Course on NTEP',
    'Certificate Course on Basic obstetric skills certificate course',
    'Certificate course in NABH Accreditation'
];

const CertificateCourses = () => {
    return (
        <>
            <Header />
            <BreadCrumb pageTitle="Certificate Courses" />
            <section className="smv-cert">
                <div className="smv-cert__wrap">
                    <div className="smv-cert__hero">
                        <div>
                            <p className="smv-cert__eyebrow">Academics • Certificate Courses</p>
                            <h2 className="smv-cert__title">List of Certificate Courses</h2>
                            <p className="smv-cert__subtitle">
                                Structured short-term programs designed to strengthen clinical competency,
                                patient safety, and professional communication.
                            </p>
                        </div>
                    </div>

                    <div className="smv-cert__table">
                        <div className="smv-cert__row smv-cert__row--head">
                            <span className="smv-cert__cell smv-cert__cell--id">S.No</span>
                            <span className="smv-cert__cell smv-cert__cell--id">Name of the course</span>
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

export default CertificateCourses;
