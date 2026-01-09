import React from 'react';

const SingleTestimonialV3 = ({ testimonial }) => {
    let { text, image, name, designation } = testimonial;

    return (
        <>
            <div className="single-testimonial">
                <div className="client-comment">
                    <p>{text}</p>
                    <div className="client-info">
                        <div className="client-img">
                            <img src={`/img/testimonial/${image}`} alt="testimonial" />
                        </div>
                        <div className="client-designations">
                            <h2>{name}</h2>
                            <h3>{designation}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV3;