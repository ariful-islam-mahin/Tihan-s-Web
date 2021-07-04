import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="main-header text-center">
            <img src="https://static.vecteezy.com/system/resources/previews/002/082/615/non_2x/header-with-black-and-blue-overlapped-arrows-abstract-modern-banner-with-place-for-your-text-material-design-abstract-widescreen-background-vector.jpg" alt="" width="100%" height="100%"/>
            <div className="header-text text-white border px-3 py-1">
                <h1 className="w3-hide-medium w3-hide-small w3-xxxlarge">SHOMRAT TIHAN</h1>
                <h5 className="w3-hide-large wrap-text" >SHOMRAT TIHAN</h5>
                <h3 className="w3-hide-medium w3-hide-small">EDITOR</h3>
            </div>
        </div>
    );
};

export default Header;