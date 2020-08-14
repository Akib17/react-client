import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import team from '../../Assets/image/team.jpg';
import { Link } from 'react-router-dom';
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';

export default class Courses extends Component {

    constructor() {
        super();
        this.state = {
            myData: []
        };
    }

    componentDidMount() {
        RestClient.getRequest(AppUrl.courseFour)
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

        const myList = this.state.myData;
        const view = myList.map(list => {
            return <Col lg={6} md={12} className="my-4">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <img src={team} alt="Team work" />
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <h2 className="courseTitle">{list.short_title}</h2>
                        <p className="courseDesc"> {list.short_desc} </p>
                        <Link className="link-style text-info" to="/courseDetails">Details</Link>
                    </Col>
                </Row>
            </Col>;
        });

        return (
            <Fragment>
                <Container className="courseSection">
                    <h2 className="sectionTitle">Our Courses</h2>
                    <Row>
                        {view}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
