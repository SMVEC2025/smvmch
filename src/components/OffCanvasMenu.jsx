import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logoMini from '/img/logo/logo-mini.png'

const OffCanvasMenu = () => {

    return (
        <>
            <Link className="offcanvas-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fa-solid fa-bars"></i></Link>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <Link to="/#"><img src={logoMini} alt="logo" /></Link>
                    <button type="button" className='offcanvasClose' data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className="offcanvas-body">
                    <nav className="navbar">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse show" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/#">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about#">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/admission#">Admission</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/academics#">Academics</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/student-corner#">Student Corner</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/college-research#">College Research</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/hospital#">Hospital</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/iqac#">IQAC</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/meu#">MEU</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/affiliations#">Affiliation and Accreditations</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/nirf#">NIRF</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login#">Login</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default OffCanvasMenu;
