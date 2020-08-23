import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import p1 from '../../Assets/image/1.png';
import p2 from '../../Assets/image/2.png';
import p3 from '../../Assets/image/3.png';
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

export default class AllPortfolio extends Component {

    constructor() {
        super();
        this.state = {
            myData: [],
            loading: true,
            error: false
        };
    }

    componentDidMount() {
        RestClient.getRequest(AppUrl.projects)
            .then(res => {
                if (res == null) {
                    this.setState({ error: true, loading: false });
                } else {
                    this.setState({
                        myData: res,
                        loading: false
                    });
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {

        if (this.state.loading == true) {
            return <Loading></Loading>;
        } else if(this.state.loading == false && this.state.error == false) {
            const view = this.state.myData.map(data => {
                return <Col lg={4} md={6} sm={12} className="my-4">
                    <Card className="projectCard border-0 pb-4 text-center">
                        <Card.Img className="pb-5" variant="top" src={data.project_thum} />
                        <Card.Body>
                            <Card.Title className="recentCardTitle"> {data.project_name} </Card.Title>
                            <Card.Text className="recentCardBody">
                                {data.project_shot_desc}
                            </Card.Text>
                            <Button className="recentBtn" variant="primary"><Link className="link-style" to={"/projectDetails/" + data.id + "/" + data.project_name}>View Details</Link></Button>
                        </Card.Body>
                    </Card>
                </Col>;
            });

            return (
                <Fragment>
                    <Container className="recentProject">
                        <Row>

                            {view}

                        </Row>
                    </Container>
                </Fragment>
            );
        } else if (this.state.error == true && this.state.loading == false) {
            return <Error></Error>
        }
    }
}
