import React from 'react';
import InstructorData from '../jsonData/InstructorData.json'
import SingleInstructor from './SingleInstructor';

const Instructor = (props) => {
    const { roundedImage } = props;
    const { bgColor } = props;

    return (
        <>
            <div className={`${bgColor} instructor-sec pt-100 pb-70`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sec-title">
                                <h1>Our Expert Instructor</h1>
                                <p>Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper, auctor suspendisse quisque molestie ut. Elit massa dui, leo enim magna. Cursus maecenas cubilia, ac nonummy, egestas mauris .</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {InstructorData.slice(0, 4).map(instructor =>
                            <SingleInstructor instructor={instructor} key={instructor.id} roundedImage={roundedImage} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Instructor;