import React, { Component, Fragment } from 'react';
import error from '../../Assets/image/error.svg';
import { Container, Row, Col } from 'react-bootstrap';

export default class Error extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center my-5">
                    <Row>
                        <Col>
                            <img className="w-25" src={error} alt="Error Image" />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
