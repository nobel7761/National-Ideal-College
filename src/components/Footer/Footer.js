import React from 'react';
import { Link } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import Copyright from './Copyright/Copyright';
import BookCourse from './BookCourse/BookCourse';

const Footer = () => {
    return (
        <>
            <BookCourse></BookCourse>
            <div className='footer-container'>
                <div className="container">

                    <Container>
                        <div className='footer-content'>
                            <Row>
                                <Col className='column-divider'>
                                    <Row>
                                        <h4>TOP COURSES</h4>
                                        <Col>
                                            <div className='footer-link'>
                                                <Link to='/accounting-finance'>Accounting/Finance</Link>
                                                <Link to='/art-design'>Art/Design</Link>
                                                <Link to='/business-management'>Business Management</Link>
                                                <Link to='/physical-education'>Physical Education</Link>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className='footer-link'>
                                                <Link to='/civil-engineering'>Civil Engineering</Link>
                                                <Link to='/marine-engineering'>Marine Engineering</Link>
                                                <Link to='/journalism-writing'>Journalism/Writing</Link>
                                                <Link to='/political-science'>Political Science</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className='column-divider'>
                                    <Row>
                                        <h4>NEW COURSES</h4>
                                        <Col>
                                            <div className='footer-link'>
                                                <Link to='/sciences'>Sciences</Link>
                                                <Link to='/web-design-development'>Web Design/Development</Link>
                                                <Link to='/google-business'>Google Business</Link>
                                                <Link to='/networking-courses'>Networking Courses</Link>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className='footer-link'>
                                                <Link to='/statistics'>Statistics</Link>
                                                <Link to='/seo'>SEO</Link>
                                                <Link to='/graphic-design'>Graphic Design</Link>
                                                <Link to='/information-technology'>Information Technology</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <h4>HELP & SUPPORT</h4>
                                        <Col>
                                            <div className='footer-link'>
                                                <Link to='/help'>24x7 Live Help</Link>
                                                <Link to='/feedback'>Feedback</Link>
                                                <Link to='/safety-tips'>Safety Tips</Link>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className='footer-link'>
                                                <Link to='/contact'>Contact Us</Link>
                                                <Link to='/marine-engineering'>FAQs</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                        <div className='footer-content'>
                            <Row>
                                <Col>
                                    <h4>GET IN TOUCH</h4>
                                    <div className='footer-link'>
                                        <p>Address: 28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</p>
                                        <p>Phone: +101-1231-4321</p>
                                        <p>Email: habiburnobel@gmail.com</p>
                                    </div>
                                </Col>

                                <Col>
                                    <h4>DOWNLOAD OUR FREE MOBILE APPS</h4>
                                </Col>
                                <Col>
                                    <h4>SOCIAL MEDIA</h4>
                                </Col>
                            </Row>
                        </div>

                    </Container>

                </div>
            </div>
            <Copyright></Copyright>
        </>
    );
};

export default Footer;