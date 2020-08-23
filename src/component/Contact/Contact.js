import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

export default class Contact extends Component {

    constructor() {
        super();
        this.state = {
            address: '',
            email: '',
            phone: '',
            loading: true,
            error: false
        };
    }

    componentDidMount() {
        RestClient.getRequest(AppUrl.footer)
            .then(res => {
                if (res == null) {
                    this.setState({ error: true, loading: false });
                } else {
                    res.map(li => {
                        this.setState({
                            address: li.address,
                            email: li.email,
                            phone: li.phone,
                            loading: false
                        });
                    });
                }
            });
    }

    sendContact() {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('msg').value;

        const newContact = {
            name,
            email,
            message
        };
        RestClient.postRequest(AppUrl.contactSend, JSON.stringify(newContact))
            .then(res => {
                alert(res);
            })
            .catch(err => {
                alert("Error Occured");
            });
    }

    render() {
        if (this.state.loading == true) {
            return <Loading></Loading>;
        } else if (this.state.loading == false && this.state.error == false) {
            const { address, email, phone } = this.state;
            return (
                <Fragment>
                    <Container className="contactSection">
                        <Row>
                            <Col lg={6} md={6} sm={12} className="pr-md-5">
                                <h2 className="formTitle">Stay connected</h2>
                                <Form>
                                    <Form.Group>
                                        <Form.Label className="formLabel">Name</Form.Label>
                                        <Form.Control type="text" id="name" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="formLabel">Email</Form.Label>
                                        <Form.Control type="email" id="email" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className="formLabel">Message</Form.Label>
                                        <Form.Control as="textarea" id="msg" rows="4" />
                                    </Form.Group>
                                    <Button onClick={this.sendContact} variant="primary" className="contactFormBtn">
                                        Submit
                                </Button>
                                </Form>
                            </Col>
                            <Col lg={6} md={6} sm={12} className="pl-md-5">
                                <h2 className="footerTitle">Address</h2>
                                <p>{address}</p>
                                <p><i class="far fa-envelope"></i> {email} </p>
                                <p><i class="fas fa-mobile-alt"></i> {phone} </p>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        } else if (this.state.loading == false && this.state.error == true) {
            return <Error></Error>
        }
    }
}
