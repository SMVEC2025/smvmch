import React from 'react';
import { toast } from 'react-toastify';

const ContactForm = () => {

    const handleMessage = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Message Send Successfully")
    }

    return (
        <>
            <form onSubmit={handleMessage}>
                <div className="contact-page-form">
                    <div className="row">
                        <h2>Send your message</h2>
                        <div className="col-md-6">
                            <input type="text" name='firstName' placeholder="First Name*" autoComplete="off" required />
                        </div>
                        <div className="col-md-6">
                            <input type="text" name='lastName' placeholder="Last Name*" autoComplete="off" required />
                        </div>
                        <div className="col-md-6 ">
                            <div className="single-input-field">
                                <input type="number" name='phone' placeholder="Phone Number*" autoComplete="off" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="single-input-field">
                                <input type="email" name='email' placeholder="E-mail*" autoComplete="off" required />
                            </div>
                        </div>
                        <div className="col-md-12 message-input">
                            <div className="single-input-field">
                                <textarea placeholder="Write Your Message*" name='comment-form' autoComplete="off" required></textarea>
                            </div>
                        </div>
                        <div className="single-input-fields-btn">
                            <button type="submit">Send Now</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;