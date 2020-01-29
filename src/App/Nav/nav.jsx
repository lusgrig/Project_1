import React, { useState, useEffect } from 'react';
import './nav.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    const [showMenu, updateShowMenu] = useState(true);
    const [isSmall, updateIsSmall] = useState(true);


    const handleHamburgerClick = () => {
        console.log('you hit the hamburger');
        let newShowMenu;
        if(showMenu === true){
            newShowMenu = false;
        } else{
            newShowMenu = true;
        }
        
        
        updateShowMenu(newShowMenu);


    }

    const handleIsSmall = () => {
        if(window.innerWidth > 599) {
            updateIsSmall(false);
            updateShowMenu(true);
        }else{
            updateIsSmall(true);
            updateShowMenu(false);
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleIsSmall);
        handleIsSmall();
    },[]);



    return (
        <nav>
        {
            isSmall &&
           
            <div className="hamburger" onClick={ handleHamburgerClick }>
                <FontAwesomeIcon icon = { faBars }/>
            
            </div>
            }
            {
                showMenu &&
                <div className="links">
                    <a href="#">Welcome</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    
                </div>
            }  
              
        </nav>
    );    
}

export default Nav;
    