import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <a class="active" href="#home">Home</a>
                </li>
                <div class="float">
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                </div>
            </ul>
        </div>
    );
};

export default Navbar;