import './Header.scss';
import SnowBuddyLogo from '../../assets/logo/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header({ isUserLoggedIn, setIsUserLoggedIn }) {
    const location = useLocation();
    const [url, setUrl] = useState(null);

    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        setIsUserLoggedIn(false);
    };

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
                    >
                        Resorts
                    </Link>
                    {!isUserLoggedIn ? (
                        <Link
                            to='/login'
                            className={url === '/login' ? 'header__button header__button--active' : 'header__button'}
                        >
                            Sign In
                        </Link>
                    ) : (
                        <>
                            <Link
                                to='/profile'
                                className={url === '/profile' ? 'header__button header__button--active' : 'header__button'}
                            >
                                Profile
                            </Link>
                            <button onClick={handleLogout} className="header__button">
                                Log Out
                            </button>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
