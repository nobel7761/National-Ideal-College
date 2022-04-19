import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import NavbarList from './NavbarList/NavbarList';
import SearchBar from './SearchBar/SearchBar';

const Header = () => {

    return (
        <div className='header'>
            <div className='container'>
                <div className='header-container'>
                    <div className='top-left'>
                        <div>
                            <p>Contact: Lake Road, Suite 180 Farmington Hills, U.S.A.</p>
                        </div>
                        <div>
                            <p>Phone: +8801521320912</p>
                        </div>
                    </div>
                    <div className='top-right'>
                        <div>
                            {/* icons will be here */}
                        </div>
                        <div>
                            <Link to='/sign-up'><button style={{ marginRight: '5px' }}>Sign Up</button></Link>
                            <Link to='/sign-in'><button>Sign In</button></Link>

                        </div>
                    </div>
                </div>
            </div>
            <NavbarList></NavbarList>
            <SearchBar></SearchBar>
        </div>
    );
};

export default Header;