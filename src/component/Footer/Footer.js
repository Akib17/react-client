import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import Error from '../Error/Error';

export default class Footer extends Component {

    constructor() {
        super();
        this.state = {
            facebook: '',
            twitter: '',
            instagram: '',
            address: '',
            email: '',
            phone: '',
            copywrite: '',
            error: false
        };
    }

    componentDidMount() {
        RestClient.getRequest(AppUrl.footer)
            .then(res => {
                if (res == null) {
                    this.setState({
                        error: true
                    });
                } else {
                    res.map(li => {
                        this.setState({
                            facebook: li.facebook_url,
                            twitter: li.twitter_url,
                            instagram: li.instagram_url,
                            address: li.address,
                            email: li.email,
                            phone: li.phone,
                            copywrite: li.copywrite
                        });
                    });
                }
            });
    }

    render() {
        if (this.state.error == true) {
            return <Error></Error>;
        } else {
            return (
                <Fragment>
                    <Container fluid="true" className="footerSection p-5">
                        <Row>
                            <Col lg={3} md={6} sm={12} className="my-4">
                                <h2 className="footerTitle">Stay connected</h2>
                                <a href={this.state.facebook} target="_blank" className="footerSocial"><i class="fab fa-facebook-f"></i> Facebook</a>
                                <a className="footerSocial" target="_blank" href={this.state.twitter}><i class="fab fa-twitter"></i> Twitter</a>
                                <a className="footerSocial" target="_blank" href={this.state.instagram}><i class="fab fa-instagram"></i> Instagram</a>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="my-4">
                                <h2 className="footerTitle">Address</h2>
                                <p> {this.state.address} </p>
                                <p><i class="far fa-envelope"></i> {this.state.email} </p>
                                <p><i class="fas fa-mobile-alt"></i> {this.state.phone} </p>
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
            );
        }
    }
}
