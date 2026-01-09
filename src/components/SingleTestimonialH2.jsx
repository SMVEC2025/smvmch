import React from 'react';

const SingleTestimonialH2 = ({ testimonial }) => {
    let { image, text, name, designation } = testimonial;

    return (
        <>
            <div className="single-testimonial-v2">
                <div className="testimonial-client-info">
                    <div className="testimonial-client-img">
                        <img src={`/img/testimonial/${image}`} alt="testimonial" />
                    </div>
                </div>
                <div className="client-comment">
                    <p>{text}</p>
                    <div className="client-info">
                        <h2>{name}</h2>
                        <h3>{designation}</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialH2;