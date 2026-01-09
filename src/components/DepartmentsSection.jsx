import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const DepartmentsSection = () => {
    const [activeTab, setActiveTab] = useState('departmental');

    const departmentalServices = [
        'Anesthesiology',
        'Cardiology',
        'Cardiothoracic Surgery',
        'Dental',
        'Dermatology',
        'ENT',
        'General Medicine',
        'Nephrology',
        'Neurology',
        'Neurosurgery',
        'Medical Oncology',
        'Obstetrics Gynaecology',
        'Ophthalmology',
        'Orthopaedics',
        'Paediatrics',
        'Plastic Surgery',
        'Psychiatry',
        'General Surgery',
        'Pulmonary Medicine',
        'Interventional Pulmonology',
        'Radiology',
        'Surgical Oncology',
        'Urology'
    ];

    const diagnosticServices = [
        'Central Laboratory',
        'Biochemistry Lab',
        'Microbiology Lab',
        'Pathology Lab',
        'Radiology'
    ];

    const therapeuticServices = [
        'Dietetics',
        'Nursing',
        'Pharmacy',
        'Physiotherapy'
    ];

    return (
        <>
            <section className="departments-sec pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="departments-header events-showcase-header">
                                <h2>Our Departments & Centers</h2>
                                <Link className="events-showcase-view" to="/departments#">
                                    View all Departments
                                    <span className="events-showcase-view-icon">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="departments-tabs">
                                <button
                                    type="button"
                                    className={`departments-tab ${activeTab === 'departmental' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('departmental')}
                                >
                                    Departmental Services
                                </button>
                                <button
                                    type="button"
                                    className={`departments-tab ${activeTab === 'diagnostic' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('diagnostic')}
                                >
                                    Diagnostic Services
                                </button>
                                <button
                                    type="button"
                                    className={`departments-tab ${activeTab === 'therapeutic' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('therapeutic')}
                                >
                                    Therapeutic Services
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {activeTab === 'departmental' && (
                                <div className="departments-card">
                                    <div className="departments-card-icon">
                                        <i className="fa-solid fa-hospital-user"></i>
                                    </div>
                                    <h3>Departmental Services</h3>
                                    <div className="departments-list-grid">
                                        {departmentalServices.map((item) => (
                                            <Link className="departments-list-item" to="/departments#" key={item}>
                                                <span>{item}</span>
                                                <i className="fa-solid fa-chevron-right"></i>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {activeTab === 'diagnostic' && (
                                <div className="departments-card">
                                    <div className="departments-card-icon">
                                        <i className="fa-solid fa-vial"></i>
                                    </div>
                                    <h3>Diagnostic Services</h3>
                                    <div className="departments-list-grid">
                                        {diagnosticServices.map((item) => (
                                            <Link className="departments-list-item" to="/departments#" key={item}>
                                                <span>{item}</span>
                                                <i className="fa-solid fa-chevron-right"></i>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {activeTab === 'therapeutic' && (
                                <div className="departments-card">
                                    <div className="departments-card-icon">
                                        <i className="fa-solid fa-hand-holding-medical"></i>
                                    </div>
                                    <h3>Therapeutic Services</h3>
                                    <div className="departments-list-grid">
                                        {therapeuticServices.map((item) => (
                                            <Link className="departments-list-item" to="/departments#" key={item}>
                                                <span>{item}</span>
                                                <i className="fa-solid fa-chevron-right"></i>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DepartmentsSection;
