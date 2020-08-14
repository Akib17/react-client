import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import p1 from '../../Assets/image/1.png';
import p2 from '../../Assets/image/2.png';
import p3 from '../../Assets/image/3.png';
import { Link } from 'react-router-dom';
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';

export default class RecentProject extends Component {

    constructor() {
        super();
        this.state = {
            myData: []
        };
    }

    componentDidMount() {
        RestClient.getRequest(AppUrl.project3)
            .then(res => {
                this.setState({
                    myData: res
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        // const myList = this.state.data;
        const view = this.state.myData.map(data => {
            return <Col>
                <Card className="projectCard border-0 pb-4 text-center">
                    <Card.Img className="pb-5" variant="top" src={data.project_thum} />
                    <Card.Body>
                        <Card.Title className="recentCardTitle"> {data.project_name} </Card.Title>
                        <Card.Text className="recentCardBody">
                            {data.project_shot_desc}
                    </Card.Text>
                        <Button className="recentBtn" variant="primary"><Link className="link-style" to="/projectDetails">View Details</Link></Button>
                    </Card.Body>
                </Card>
            </Col>;
        });

        return (
            <Fragment>
                <Container className="recentProject">
                    <h2 className="sectionTitle">Recent Projects</h2>
                    <Row>

                        {view}
                    
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
