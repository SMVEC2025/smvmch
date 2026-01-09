import React from 'react';

const SingleTestimonial = ({ testimonial }) => {
    let { text, name, designation, image } = testimonial;

    return (
        <>
            <div className="single-testimonial">
                <p>{text}</p>
                <div className="testimonial d-flex justify-content-center align-items-center">
                    <div className="inner">
                        <div className="client-info">
                            <h2>{name}</h2>
                            <h3>{designation}</h3>
                        </div>
                    </div>
                    <div className="inner">
                        <div className="testimonial-client-img">
                            <img src={`/img/testimonial/${image}`} alt="testimonialImage" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonial;