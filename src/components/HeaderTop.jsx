import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const HeaderTop = (props) => {
    let { headerBgGray } = props;

    return (
        <>
            <div className={`${headerBgGray} header-top`} >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-7 d-none d-md-block">
                            <div className="header-left">
                                <ul>
                                    <li><a href="tel:+00 0123456789"><i className="fa-solid fa-phone"></i>+00 0123456789</a></li>
                                    <li><a href="mailto:info@learapress.com"><i className="fa-regular fa-envelope"></i>info@learapress.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5 d-none d-md-block">
                            <div className="header-right-div">
                                <div className="header-top-menu">
                                    <ul>
                                        <li><Link to="/admission#">Admission</Link></li>
                                        <li><Link to="/hospital#">Hospital</Link></li>
                                        <li><Link to="/hospital#">COE</Link></li>
                                        <li><Link to="/hospital#">MANTRA’25</Link></li>
                                        <li><Link to="/hospital#">AQAR</Link></li>
                                        <li><Link to="/login#">Login</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTop;
