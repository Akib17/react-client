import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Player } from 'video-react';
import BigPlayButton from 'video-react/lib/components/BigPlayButton';

export default class CourseDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid="true" className="pageTopBanner">
                    <div className="pageTopBannerOverlay">
                        <Container>
                            <Row className="p-0 m-0" className="courseDetailsTop">
                                <Col lg={6} md={6} sm={12}>
                                    <h2 className="courseDetailsTitle">Full stack web development</h2>
                                    <p className="courseDetailsNumber">Total lectures: 55</p>
                                    <p className="courseDetailsNumber">Total students: 123</p>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <p className="courseDetailsDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque repellendus officiis alias eius, sapiente debitis. Quas eius ipsa asperiores voluptate, consectetur sunt impedit totam ex dolorum earum ea. Corrupti, repellendus!</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>

                <Container className="courseDetailsBody">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h2>Skills you will get</h2>
                            <ul>
                                <li>Core knowledge of web programming</li>
                                <li>Core knowledge of web programming</li>
                                <li>Core knowledge of web programming</li>
                                <li>Core knowledge of web programming</li>
                                <li>Core knowledge of web programming</li>
                            </ul>
                            <button className="btn btn-info">Buy Now</button>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <Player>
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                <BigPlayButton position="center"></BigPlayButton>
                            </Player>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
