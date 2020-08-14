import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export default class Contact extends Component {
    render() {
        return (
            <Fragment>
                <Container className="contactSection">
                    <Row>
                        <Col lg={6} md={6} sm={12} className="pr-md-5">
                            <h2 className="formTitle">Stay connected</h2>
                            <Form>
                                <Form.Group>
                                    <Form.Label className="formLabel">Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="formLabel">Email</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="formLabel">Message</Form.Label>
                                    <Form.Control as="textarea" rows="4" />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="contactFormBtn">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="pl-md-5">
                            <h2 className="footerTitle">Address</h2>
                            <p>Mirpur 01, <br /> Road #2, Section #43, House #3 <br />Dhaka</p>
                            <p><i class="far fa-envelope"></i> akibahmad17@gmail.com</p>
                            <p><i class="fas fa-mobile-alt"></i> 01763-489672</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
