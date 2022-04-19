import React from 'react';
import './NavbarList.css';
import CustomLink from '../../CustomLink/CustomLink';
import Logo from '../../../images/NIC.png'
import { Nav, Navbar } from 'react-bootstrap';

const NavbarList = () => {
    return (
        <div className="navbar-container">
            <div className="container">
                <div className="menu">
                    <div className='menu-left'>
                        <img src={Logo} alt="" />
                        <h3>NATIONAL IDEAL COLLEGE</h3>
                    </div>
                    <div>
                        <Navbar expand="lg">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <CustomLink to="/" className='nav-link'>Home</CustomLink>
                                    <CustomLink to="/about" className='nav-link'>About Us</CustomLink>
                                    <CustomLink to="/admission" className='nav-link'>Admission</CustomLink>
                                    <CustomLink to="/courses" className='nav-link'>All Courses</CustomLink>
                                    <CustomLink to="/pages" className='nav-link'>All Pages</CustomLink>
                                    <CustomLink to="/events" className='nav-link'>Events</CustomLink>
                                    <CustomLink to="/student" className='nav-link'>Student</CustomLink>
                                    <CustomLink to="/contact" className='nav-link'>Contact Us</CustomLink>


                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default NavbarList;