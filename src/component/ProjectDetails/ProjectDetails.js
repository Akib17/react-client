import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="courseDetails">
                        <Col lg={6} md={6} sm={12}>
                            <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/01/divi-web-agency-layout-pack-featured-image.jpg" alt="Project Image"/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h2 className="projectDetailsTitle">Web development Project</h2>
                            <p className="projectDetailsDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolore natus, ut ipsam labore eos ad dolorem quia asperiores temporibus nihil a sapiente eveniet laborum optio ipsa aspernatur qui at.</p>
                            <ul className="courseDetailsList">
                                <li>Dynamic E-learning website</li>
                                <li>Dynamic E-learning website</li>
                                <li>Dynamic E-learning website</li>
                                <li>Dynamic E-learning website</li>
                                <li>Dynamic E-learning website</li>
                                <li>Dynamic E-learning website</li>
                            </ul>
                            <button className="btn btn-info">More Info</button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
