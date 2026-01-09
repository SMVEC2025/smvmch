import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleResearch = ({ research }) => {
    let { image, icon, title, text, delay } = research;

    return (
        <>
            <Fade right delay={delay}>
                <div className="research-item">
                    <div className="inner">
                        <div className="media">
                            <div className="research-thumb">
                                <Link to="/research-details#">
                                    <img className='img-full' src={`/img/research/${image}`} alt="research" />
                                </Link>
                                <div className="research-icon">
                                    <div className="read-more-button">
                                        <Link to="/research-details#">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="research-inner-text d-flex">
                                <div className="media-left">
                                    <div className="research_icon">
                                        <img src={`/img/icon/${icon}`} alt="icon" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h2><Link to="/research-details#">{title}</Link></h2>
                                    <p>{text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleResearch;