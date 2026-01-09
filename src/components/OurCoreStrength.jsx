import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const OurCoreStrength = () => {
    return (
        <>
            <section className="core-strength-sec pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="core-strength-header events-showcase-header">
                                <div>
                                    <h2>See how our clinical ecosystem supports every patient journey.</h2>
                                    <p>Super speciality care, diagnostic excellence, and coordinated departments built for outcomes.</p>
                                </div>
                                <Link className="events-showcase-view" to="/hospital#">
                                    View all
                                    <span className="events-showcase-view-icon">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row core-strength-grid justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="core-strength-card">
                                <div className="core-strength-icon">
                                    {/* <i className="fa-solid fa-briefcase-medical"></i> */}
                                    <img src="/img/icon/medical.png" alt="" />
                                </div>
                                <h3>Super Speciality</h3>
                                <p>Expert-led specialty clinics with integrated care pathways and advanced procedures.</p>
                                <Link className="core-strength-link" to="/hospital#">
                                    view more
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="core-strength-card">
                                <div className="core-strength-icon">
                                    <img src="/img/icon/microscope.png" alt="" />
                                </div>
                                <h3>Diagnostic Services</h3>
                                <p>24/7 lab, imaging, and pathology support for timely and accurate diagnosis.</p>
                                <Link className="core-strength-link" to="/hospital#diagnostics">
                                    view more
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="core-strength-card">
                                <div className="core-strength-icon">
                                    <img src="/img/icon/hospital.png" alt="" />
                                </div>
                                <h3>Departments</h3>
                                <p>Comprehensive departments with coordinated care, teaching, and research.</p>
                                <Link className="core-strength-link" to="/departments#">
                                    view more
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurCoreStrength;
