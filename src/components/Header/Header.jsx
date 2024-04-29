import './Header.scss';
import SnowBuddyLogo from '../../assets//logo/logo.png';
//import { ReactComponent as SnowBuddyLogo } from '../../assets//logo/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


import React from 'react'

function Header() {

  const location = useLocation();
  const [ url, setUrl ] = useState(null);

  useEffect(() => {
      setUrl(location.pathname);
  }, [location]);

  return (
    <header className='header'>
        <div className='header__content'>
            <Link to='/resorts'>
              <img src={SnowBuddyLogo} alt="SnowBuddy Logo" className='header__logo' />
            </Link>
            <div className='header__tabs'>
                <Link
                    to='/resorts'
                    className={url === '/resorts' ? 'header__button header__button--active' : 'header__button'}
                    >Resorts
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Header