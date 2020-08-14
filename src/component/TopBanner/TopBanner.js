import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';

export default class TopBanner extends Component {

    state = {
        title: '...',
        description: '...'
    };

    componentDidMount() {
        RestClient.getRequest(AppUrl.heroArea)
            .then(res => {
                this.setState({
                    title: res[0].hero_title,
                    description: res[0].hero_description
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Fragment>
                <Container fluid="true" className="topBanner">
                    <div className="topBannerOverlay">
                        <Row className="p-0 m-0">
                            <Col className="text-center">
                                <div className="topContent">
                                    <h2> {this.state.title} </h2>
                                    <h5> {this.state.description} </h5>
                                    <Button variant="info" f>More Info</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Fragment>
        );
    }
}