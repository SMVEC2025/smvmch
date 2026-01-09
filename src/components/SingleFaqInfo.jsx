import React from 'react';

const SingleFaqInfo = ({ faqInfo }) => {
    let { title, text, icon } = faqInfo

    return (
        <>
            <div className="faq-single">
                <div className="media d-flex">
                    <div className="media-left">
                        <div className="icon">
                            <i className={icon}></i>
                        </div>
                    </div>
                    <div className="media-body ps-3">
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleFaqInfo;