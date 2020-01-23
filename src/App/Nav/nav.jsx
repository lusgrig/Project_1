import React, { useLayoutEffect } from 'react';
import './nav.scss';

const Nav = () => {
    return (
        <nav>
            <div className="hamburger">Hamburger</div>
            <div className="links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
         
            </div>
        </nav>
    );    
}

export default Nav;
    