import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import team from '../../Assets/image/team.jpg';
import { Link } from 'react-router-dom';
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

export default class AllCourse extends Component {

    constructor() {
        super();
        this.state = {
            myData: [],
            loading: true,
            error: false
        };
    }

    componentDidMount() {
        RestClient.getRequest(AppUrl.courseAll)
            .then(res => {
                if (res == null) {
                    this.setState({ error: true, loading: false });
                } else {
                    this.setState({
                        myData: res,
                        loading: false
                    });
                }
            });
    }

    render() {

        if (this.state.loading == true) {
            return <Loading></Loading>;
        } else if (this.state.loading == false && this.state.error == false) {
            const myList = this.state.myData;
            const view = myList.map(res => {
                return <Col lg={6} md={12} className="my-4">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img src={res.thum_img} alt="Team work" />
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h2 className="courseTitle">{res.short_title}</h2>
                            <p className="courseDesc">{res.short_desc}</p>
                            <Link className="link-style text-info" to={"/courseDetails/" + res.id}>Details</Link>
                        </Col>
                    </Row>
                </Col>;
            });

            return (
                <Fragment>
                    <Container className="courseSection allCourse">
                        <Row className="mt-5">
                            {view}
                        </Row>
                    </Container>
                </Fragment>
            );
        } else if (this.state.loading == false && this.state.error == true){
            return <Error></Error>;
        }
    }
}