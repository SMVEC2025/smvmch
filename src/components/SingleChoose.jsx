import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleChoose = ({ choose }) => {
    let { image, icon, text, title } = choose;

    return (
        <>
            <div className="why-choose-inner">
                <div className="why-choose-thumb">
                    <img src={`/img/why-choose/${image}`} alt="whyChoose" />
                    <div className="why-choose-icon">
                        <img src={`/img/icon/${icon}`} alt="whyChooseIcon" />
                    </div>
                </div>
                <div className="why-choose-text">
                    <h2><Link to="/course#">{title}</Link></h2>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
};

export default SingleChoose;