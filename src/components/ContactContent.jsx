import React from 'react';
import ContactForm from './ContactForm';

const ContactContent = () => {
    return (
        <>
            <section className="contact-page-sec pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="contact-page-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d503103.25504622894!2d-118.94592338887756!3d34.065964560335836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z4Kay4Ka4IOCmj-CmnuCnjeCmnOCnh-CmsuCnh-CmuCwg4KaV4KeN4Kav4Ka-4Kay4Ka_4Kar4KeL4Kaw4KeN4Kao4Ka_4Kav4Ka84Ka-LCDgpq7gpr7gprDgp43gppXgpr_gpqgg4Kav4KeB4KaV4KeN4Kak4Kaw4Ka-4Ka34KeN4Kaf4KeN4Kaw!5e0!3m2!1sbn!2sbd!4v1497798250780" width="100%" height="350" frameBorder="0" allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="contact-info">
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="fa fa-map-marker"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <h2>address</h2>
                                        <span>CaliForniya , United State</span>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-info">
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="fa fa-envelope"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <h2>e-mail</h2>
                                        <span><a href="mailto:company@gmail.com">company@gmail.com</a></span>
                                        <span><a href="mailto:yourmail@gmail.com">yourmail@gmail.com</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-info">
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="fa-regular fa-clock"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <h2>office time</h2>
                                        <span>Mon - Thu  9:00 am - 4.00 pm</span>
                                        <span>Thu - Mon  10.00 pm - 5.00 pm</span>
                                        <span>Fri - Sun Office Holiday</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactContent;