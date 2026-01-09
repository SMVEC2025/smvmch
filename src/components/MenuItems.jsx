import React, { useState } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';

const MenuItems = () => {

    const [isSearchVisible, setIsSearchVisible] = useState(true);
    const toggleIcon = () => {
        setIsSearchVisible(!isSearchVisible);
    }

    const handleSearch = (event) => {
        event.preventDefault()
        event.target.reset()
    }

    return (
        <>
            <div className="menu">
                <nav id="main-menu" className="main-menu">
                    <ul className="main-menu-list">
                        <li><Link to="/#">Home</Link></li>
                        <li className="smv-about-mega">
                            <Link to="/about#">About Us</Link>
                            <ul className="smv-about-mega-menu">
                                <li className="smv-about-mega-inner">
                                    <div className="smv-about-mega-left">
                                        <h4>About Us</h4>
                                        <p>SMVMCH is committed to advanced healthcare, education, and research with a patient-first focus.</p>
                                        <Link className="smv-about-mega-cta" to="/about#">
                                            Learn more about us <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                    <div className="smv-about-mega-right">
                                        <Link to="/about#inspiration">Our Inspiration</Link>
                                        <Link to="/about#administration">Administration</Link>
                                        <Link to="/about#achievements">Achievements</Link>
                                        <Link to="/about#projects">Healthcare Projects</Link>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li><Link to="/academics#">Academics</Link></li>
                        <li><Link to="/student-corner#">Student Corner</Link></li>
                        <li><Link to="/college-research#">College</Link></li>
                        <li><Link to="/college-research#">Research</Link></li>
                        <li><Link to="/iqac#">IQAC</Link></li>
                        <li><Link to="/meu#">MEU</Link></li>
                        <li><Link to="/affiliations#">Affiliation and Accreditations</Link></li>
                        <li><Link to="/nirf#">NIRF</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default MenuItems;
