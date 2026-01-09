import React from 'react';
import InstructorData from '../jsonData/InstructorData.json'
import SingleInstructor from './SingleInstructor';

const AllInstructor = () => {
    return (
        <>
            <section className="instructor-sec pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        {InstructorData.map(instructor =>
                            <SingleInstructor instructor={instructor} key={instructor.id} />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AllInstructor;