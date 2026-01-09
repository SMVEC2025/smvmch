import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const EnquiryCta = () => {
    return (
        <>
            <section className="enquiry-cta-sec">
                <div className="container">
                    <div className="enquiry-cta-inner">
                        <h2>Take the next step</h2>
                        <p>Start your journey with SMVMCH. Choose the program that fits your goals.</p>
                        <div className="enquiry-cta-actions">
                            <Link className="enquiry-cta-btn primary" to="/admission#pg">
                                Enquire PG
                            </Link>
                            <Link className="enquiry-cta-btn secondary" to="/admission#ug">
                                Enquire UG
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EnquiryCta;
