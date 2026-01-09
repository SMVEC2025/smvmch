import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const CourseInstructor = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="course-instructor">
                        <div className="instructor-img">
                            <img src="/img/client/client1.png" alt="client" />
                        </div>
                        <div className="details">
                            <h2><Link to="#">David Max</Link></h2>
                            <span>Math Analysis</span>
                        </div>
                        <div className="rating">
                            <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi delectus. Tamquam ornatus pro no, cum id elitr soleat maluisset. Mel quas everti insolens cu, duo harum feugiat an.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseInstructor;