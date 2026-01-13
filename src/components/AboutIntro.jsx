import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../assets/css/about-intro.css';

const AboutIntro = () => {
    return (
        <section className="smv-about-intro">
            <div className="smv-about-intro__top">
                <div className="smv-about-intro__headline">
                    <h2>When you need answers, you know where to go.</h2>
                    <div className="smv-about-intro__actions">

                        <Link className="smv-about-intro__btn smv-about-intro__btn--ghost" to="/contact#">
                            <span className="smv-about-intro__icon smv-about-intro__icon--pin">
                                <i className="fa-solid fa-location-dot"></i>
                            </span>
                            Locate us
                        </Link>
                    </div>
                </div>
                <div className="smv-about-intro__content">
                    <p>
                        Located in the vibrant heart of India, SMVMCH is one of the leading medical colleges and
                        multi‑specialist teaching hospitals. We are dedicated to delivering compassionate,
                        advanced healthcare and academic excellence for every learner and patient.
                    </p>
                    <div className="smv-about-intro__stats">
                        <div className="smv-about-intro__stat">
                            <h3>1300+</h3>
                            <span>Bed Capacity</span>
                        </div>
                        <div className="smv-about-intro__stat">
                            <h3>10M+</h3>
                            <span>Treated Patients</span>
                        </div>
                        <div className="smv-about-intro__stat">
                            <h3>128+</h3>
                            <span>Medical Equipments</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="smv-about-intro__cards">
                <div className="smv-about-intro__card">
                    <span className="smv-about-intro__card-number">01.</span>
                    <h4>Our Vision</h4>
                    <p>
                        To provide healthcare of the highest quality to all in a spirit of compassion and continually
                        improve the standard of care through value‑based quality education and research.
                    </p>
                </div>
                <div className="smv-about-intro__card">
                    <span className="smv-about-intro__card-number">02.</span>
                    <h4>Our Mission</h4>
                    <p>
                        Establish a Center of Excellence in healthcare and improve community well‑being through
                        preventive and curative medicine, medical education, and research.
                    </p>
                </div>
                <div className="smv-about-intro__card">
                    <span className="smv-about-intro__card-number">03.</span>
                    <h4>Our Philosophy</h4>
                    <p>
                        We believe exceptional healthcare should be accessible to everyone, creating a supportive
                        environment where every patient feels respected and cared for.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;
