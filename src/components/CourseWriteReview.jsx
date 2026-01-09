import React from 'react';
import { toast } from 'react-toastify';

const handleSend = (event) => {
    event.preventDefault()
    event.target.reset()
    toast.success("Review Post Successfully")
}

const CourseWriteReview = () => {
    return (
        <>
            <div className="row">
                <div className="review-form">
                    <form onSubmit={handleSend}>
                        <div className="contact-page-form">
                            <h2>Write Your Review</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="single-input-field">
                                        <input type="text" name='firstName' placeholder="First Name*" autoComplete='off' required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-input-field">
                                        <input type="text" name='lastName' placeholder="Last Name*" autoComplete='off' required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-input-field">
                                        <input type="number" name='phone' placeholder="Phone Number*" autoComplete='off' required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-input-field">
                                        <input type="email" name='email' placeholder="E-mail*" autoComplete='off' required />
                                    </div>
                                </div>
                                <div className="col-md-12 message-input">
                                    <div className="single-input-field">
                                        <textarea placeholder="Write Your Message*" name='message' autoComplete='off' required></textarea>
                                    </div>
                                </div>
                                <div className="single-input-fields-btn">
                                    <button type="submit">Send Now</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CourseWriteReview;