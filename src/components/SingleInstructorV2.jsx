import React from 'react';
import SocialShare from './SocialShare';

const SingleInstructorV2 = ({ instructor }) => {
    let { title, subtitle, image } = instructor;

    return (
        <>
            <div className="instructor-member">
                <div className="instructor-member-thumb">
                    <img src={`/img/instructor/${image}`} alt="teacher" />
                </div>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <div className="instructor-social">
                    <SocialShare />
                </div>
            </div>
        </>
    );
};

export default SingleInstructorV2;