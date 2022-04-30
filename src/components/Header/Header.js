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
                            <button style={{ marginRight: '5px' }}>Sign Up</button>
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



/* 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import NavbarList from './NavbarList/NavbarList';
import SearchBar from './SearchBar/SearchBar';
import { Button, Modal } from 'react-bootstrap';


const Header = () => {
    const [modalShow, setModalShow] = useState(false);
    const SignUp = props => {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }



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
                            // icons will be here
                            </div>
                            <div>
                                <button style={{ marginRight: '5px' }} onClick={() => setModalShow(true)}>Sign Up</button>
                                <Link to='/sign-in'><button>Sign In</button></Link>
    
                            </div>
                        </div>
                    </div>
                </div>
    
                <SignUp
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                >
    
                </SignUp>
                <NavbarList></NavbarList>
                <SearchBar></SearchBar>
            </div>
        );
    };
    
    export default Header;
*/