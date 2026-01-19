import React from 'react';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import '../assets/css/academic-mou.css';

const mouItems = [
    {
        title: 'Kaplan & SMVMCH',
        region: 'Singapore',
        focus: 'Clinical electives, faculty exchange, and joint training programs.',
        link: 'https://drive.google.com/file/d/1DB273fJcQ7iPZ_6rHRdxIzv_elcmpQ9I/view?usp=sharing'
    },
    {
        title: 'AIMST University & SMVMCH',
        region: 'Malaysia',
        focus: 'Student mobility, collaborative research, and curriculum enrichment.',
        link: 'https://drive.google.com/file/d/1OBTHqMcUqskC8vYjAxGFyOCwwl34EwxV/view?usp=sharing'
    },
    {
        title: 'Hull University & SMVMCH',
        region: 'United Kingdom',
        focus: 'Academic partnerships for global health exposure and training.',
        link: 'https://drive.google.com/file/d/1pNRXK1RC3ms4aXusYMWjMyMPfn4QbSxs/view?usp=drive_link'
    }
];

const InternationalMou = () => {
    return (
        <>
            <Header />
            <BreadCrumb pageTitle="International MOU" />
            <section className="smv-mou">
                <div className="smv-mou__wrap">
                    <div className="smv-mou__hero">
                        <div>
                            <p className="smv-mou__eyebrow">Academics • Global Partnerships</p>
                            <h2 className="smv-mou__title">International Memoranda of Understanding</h2>
                            <p className="smv-mou__subtitle">
                                Formal institutional collaborations that enhance clinical exposure, research,
                                and shared academic initiatives across borders.
                            </p>
                        </div>
                        <div className="smv-mou__stats">
                            <div className="smv-mou__stat">
                                <span className="smv-mou__stat-value">3+</span>
                                <span className="smv-mou__stat-label">Active partnerships</span>
                            </div>
                            <div className="smv-mou__stat">
                                <span className="smv-mou__stat-value">4</span>
                                <span className="smv-mou__stat-label">Global regions</span>
                            </div>
                            <div className="smv-mou__stat">
                                <span className="smv-mou__stat-value">12</span>
                                <span className="smv-mou__stat-label">Joint initiatives</span>
                            </div>
                        </div>
                    </div>

                    <div className="smv-mou__list">
                        {mouItems.map((item) => (
                            <article className="smv-mou__card" key={item.title}>
                                <div className="smv-mou__icon">
                                    <i className="fa-solid fa-handshake"></i>
                                </div>
                                <div className="smv-mou__content">
                                    <div className="smv-mou__title-row">
                                        <h3>{item.title}</h3>
                                        <span className="smv-mou__badge">{item.region}</span>
                                    </div>
                                    <p className="smv-mou__focus">{item.focus}</p>
                                    <div className="smv-mou__link-row">
                                        <a
                                            className="smv-mou__link"
                                            href={item.link}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            View document
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default InternationalMou;
