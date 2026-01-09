import React from 'react';

const SingleAddedStudent = ({ instructor }) => {
    let { image, title } = instructor;

    return (
        <>
            <div className="recently-added-student">
                <div className="student-photo">
                    <img src={`/img/instructor/${image}`} alt="studentImage" />
                </div>
                <span className="student-name">{title}</span>
            </div>
        </>
    );
};

export default SingleAddedStudent;