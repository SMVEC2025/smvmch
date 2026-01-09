import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleChooseV3 = ({ choose }) => {
    let { icon, title, text, delay } = choose

    return (
        <>
            <Fade right delay={delay}>
                <div className="why-choose-inner">
                    <div className="why-choose-icon">
                        <img src={`/img/icon/${icon}`} alt="icon" />
                    </div>
                    <div className="why-choose-text">
                        <h2><Link to="#">{title}</Link></h2>
                        <p>{text}</p>
                        <Link to="#" className="read-more">Read More</Link>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleChooseV3;