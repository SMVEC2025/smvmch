import React from 'react';
import MainMenu from './MainMenu';
import HeaderTop from './HeaderTop';

const Header5 = () => {
    return (
        <>
            <header>
                <HeaderTop headerBgGray={"home-v5"} />
                <MainMenu />
            </header>
        </>
    );
};

export default Header5;