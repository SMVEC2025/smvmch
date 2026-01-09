import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleChooseH2 = ({ choose }) => {
    let { image, title, text, delay } = choose;

    return (
        <>
            <Fade right delay={delay}>
                <div className="why-choose-inner">
                    <div className="why-choose-thumb">
                        <img src={`/img/why-choose/${image}`} alt="whyChooseImage" />
                    </div>
                    <div className="why-choose-text">
                        <h2><Link to="#">{title}</Link></h2>
                        <p>{text}</p>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleChooseH2;