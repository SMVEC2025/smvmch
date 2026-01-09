import React, { useEffect, useState } from 'react';
import MenuItems from './MenuItems';
import OffCanvasMenu from './OffCanvasMenu';
import logo from '/img/logo/logo.png'
import { HashLink as Link } from 'react-router-hash-link';

const MainMenuV2 = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`hd-sec home-v3 ${isSticky ? 'sticky-menu' : ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 menu-center d-none d-lg-block">
                            <MenuItems />
                        </div>
                        <div className="col-md-3 col-5 d-lg-none">
                            <div className="logo">
                                <Link to="/"><img src={logo} alt="logo" /></Link>
                            </div>
                        </div>
                        <div className="col-md-9 col-7 d-lg-none" >
                            <div className="offcanvas-menu-area">
                                <OffCanvasMenu />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainMenuV2;