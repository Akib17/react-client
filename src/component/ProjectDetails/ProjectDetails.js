import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import HtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading';

export default class ProjectDetails extends Component {
    constructor(props) {
        super();
        this.state = {
            projectId: props.id,
            project_img: '',
            project_name: '',
            project_description: '',
            project_preview: '',
            loading: true
        };
    }

    componentDidMount() {
        RestClient.getRequest(AppUrl.projectDetails + this.state.projectId)
            .then(res => {
                this.setState({
                    project_img: res[0].project_img,
                    project_name: res[0].project_name,
                    project_description: res[0].project_description,
                    project_preview: res[0].project_preview,
                    project_features: res[0].project_features,
                    loading: false
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        if (this.state.loading == true) {
            return <Loading></Loading>;
        } else {
            return (
                <Fragment>
                    <Container>
                        <Row className="courseDetails">
                            <Col lg={6} md={6} sm={12}>
                                <img src={this.state.project_img} />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <h2 className="projectDetailsTitle"> {this.state.project_name} </h2>
                                <p className="projectDetailsDesc"> {this.state.project_description} </p>
                                {HtmlParser(this.state.project_features)}
                                <Button href={this.state.project_preview} target="_blank" variant="primary recentBtn">More Info</Button>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }

    }
}
