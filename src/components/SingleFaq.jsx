import React from 'react';

const SingleFaq = ({ faq }) => {
    let { CourseId, dataTarget, ariaControls, title, text } = faq;

    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id={CourseId}>
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={dataTarget} aria-expanded="false" aria-controls={ariaControls}>
                        {title}
                    </button>
                </h2>
                <div id={ariaControls} className="accordion-collapse collapse" aria-labelledby={CourseId} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {text}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleFaq;