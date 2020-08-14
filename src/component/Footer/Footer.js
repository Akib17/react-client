import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid="true" className="footerSection p-5">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="my-4">
                            <h2 className="footerTitle">Stay connected</h2>
                            <a className="footerSocial" href="#"><i class="fab fa-facebook-f"></i> Facebook</a>
                            <a className="footerSocial" href="#"><i class="fab fa-twitter"></i> Twitter</a>
                            <a className="footerSocial" href="#"><i class="fab fa-instagram"></i> Instagram</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="my-4">
                            <h2 className="footerTitle">Address</h2>
                            <p>Mirpur 01, <br /> Road #2, Section #43, House #3 <br />Dhaka</p>
                            <p><i class="far fa-envelope"></i> akibahmad17@gmail.com</p>
                            <p><i class="fas fa-mobile-alt"></i> 01763-489672</p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="my-4">
                            <h2 className="footerTitle">Information</h2>
                            <Link to="about">About me</Link>
                            <Link to="contact">Contact me</Link>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="my-4">
                            <h2 className="footerTitle">Information</h2>
                            <Link to="/refund" >Refund Policy</Link>
                            <Link to="/privacy" >Privacy Policy</Link>
                            <Link to="/term" >Terms & Condition</Link>
                        </Col>
                    </Row>
                </Container>

                <Container fluid="true" className="p-5 text-center copyrightSection">
                    <Row>
                        <Col>
                            <p className="copyright">&copy; Copyright 2020 | Developed by Akib Ahmad</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
