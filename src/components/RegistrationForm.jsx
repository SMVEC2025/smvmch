import React from 'react';
import { toast } from 'react-toastify';

const RegistrationForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        event.target.reset()
        toast("Registration Successful")
    }

    return (
        <>
            <div className="join-us-form position-relative">
                <h1 className="join-us-form-title">Registration Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="join-us-field">
                        <div className="single-input-field">
                            <input type="text" name='name' autoComplete='off' placeholder="Name *" required />
                        </div>
                        <div className="single-input-field">
                            <input type="email" name='email' autoComplete='off' placeholder="Email *" required />
                        </div>
                        <div className="single-input-field">
                            <input type="number" name='phone' autoComplete='off' placeholder="Phone No" required />
                        </div>
                        <button className='register-btn' type="submit" name='submit'>Register Now </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default RegistrationForm;