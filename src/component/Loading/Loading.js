import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import loader from '../../Assets/image/loader.svg';

export default class Loading extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col>
                            <img src={loader} alt="Loading Image" />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
