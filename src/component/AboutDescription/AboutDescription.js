import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class AboutDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col>
                            <h2 className="reviewTitle">Our vision</h2>
                            <hr />
                            <p className="reviewDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quo beatae repellat, possimus doloribus praesentium sunt sint exercitationem quidem quisquam quia quas est distinctio enim.</p>
                            <br />
                            <h2 className="reviewTitle">Our implementation</h2>
                            <hr />
                            <p className="reviewDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quo beatae repellat, possimus doloribus praesentium sunt sint exercitationem quidem quisquam quia quas est distinctio enim. orem ipsum, dolor sit amet consectetur adipisicing elit. Totam quo beatae repellat, possimus dolori</p>
                            <br />
                            <h2 className="reviewTitle">Conclusion</h2>
                            <hr />
                            <p className="reviewDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quo beatae repellat, possimus doloribus praesentium sunt sint exercitationem quidem quisquam quia quas est distinctio enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit nobis veniam accusamus voluptatibus quis quaerat tempora, enim repudiandae. Reiciendis ipsa ducimus harum quae quibusdam explicabo libero dolorem est. Consequuntur.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
