import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default class PageTopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid="true" className="pageTopBanner">
                    <div className="pageTopBannerOverlay">
                        <Row className="p-0 m-0">
                            <Col className="text-center">
                                <div className="pageTopContent">
                                    <h2>{this.props.pageTitle}</h2>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Fragment>
        )
    }
}
