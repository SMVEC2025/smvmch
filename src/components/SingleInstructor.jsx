import React from 'react';
import { Fade } from 'react-reveal';
import SocialShare from '../components/SocialShare';

const SingleInstructor = ({ instructor, roundedImage }) => {
    let { image, title, subtitle, delay } = instructor

    return (
        <>
            <Fade right delay={delay}>
                <div className="col-lg-3 col-sm-6 ">
                    <div className={`${roundedImage} instructor-member`}>
                        <div className={`${roundedImage} instructor-member-thumb`}>
                            <img src={`/img/instructor/${image}`} alt="image" />
                            <div className="instructor-overlay">
                                <SocialShare />
                            </div>
                        </div>
                        <div className="instructor-info">
                            <h2>{title}</h2>
                            <h3>{subtitle}</h3>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleInstructor;