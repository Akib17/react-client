import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';

export default class Summary extends Component {

    constructor() {
        super();
        this.state = {
            totalProject: '',
            totalClient: ''
        };
    }

    componentDidMount() {
        RestClient.getRequest(AppUrl.clientHome)
            .then(result => {
                this.setState({
                    totalProject: result[0].total_projects,
                    totalClient: result[0].total_clients
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="totalProject p-0">
                    <div className="totalProjectOverlay">
                        <Row className="m-0 align-items-center" style={{ height: '50rem' }}>
                            <Container>
                                <Row className="align-items-center">
                                    <Col lg={8} md={6} sm={12} className="text-center text-white">
                                        <Row>
                                            <Col>
                                                <h2 className="countNumber">
                                                    <CountUp
                                                        start={0}
                                                        end={this.state.totalProject}
                                                        duration={1.75}
                                                    >
                                                        {({ countUpRef, start }) => (
                                                            <VisibilitySensor onChange={start} delayedCall>
                                                                <span ref={countUpRef} />
                                                            </VisibilitySensor>
                                                        )}
                                                    </CountUp>
                                                    +</h2>
                                                <h5 className="countTitle">Total Projects</h5>
                                                <hr className="w-25 text-white" />
                                            </Col>
                                            <Col>
                                                <h2 className="countNumber">
                                                    <CountUp
                                                        start={0}
                                                        end={20}
                                                        duration={1.75}
                                                    >
                                                        {({ countUpRef, start }) => (
                                                            <VisibilitySensor onChange={start} delayedCall>
                                                                <span ref={countUpRef} />
                                                            </VisibilitySensor>
                                                        )}
                                                    </CountUp>+
                                                </h2>
                                                <h5 className="countTitle">Happy client</h5>
                                                <hr className="w-25 text-white" />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg={4} md={6} sm={12}>
                                        <Card className="projectCard p-5">
                                            <Card.Body>
                                                <h2>How I work</h2>
                                                <p><i class="fas fa-check-circle"></i> Collect the all Documents</p>
                                                <p><i class="fas fa-check-circle"></i> Make the modern design</p>
                                                <p><i class="fas fa-check-circle"></i> Test all Responsiveness</p>
                                                <p><i class="fas fa-check-circle"></i> Test the app performance</p>
                                                <p><i class="fas fa-check-circle"></i> Fix the app error</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Row>
                    </div>
                </Container>
            </Fragment >
        );
    }
}
