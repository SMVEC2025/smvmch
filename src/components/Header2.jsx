import React from 'react';
import HeaderTop from './HeaderTop';
import MainMenu from './MainMenu';

const Header2 = () => {
    return (
        <>
            <header>
                <HeaderTop headerBgGray={"home-v2"} />
                <MainMenu />
            </header>
        </>
    );
};

export default Header2;