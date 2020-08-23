import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Player } from 'video-react';
import BigPlayButton from 'video-react/lib/components/BigPlayButton';
import HtmlParser from 'react-html-parser';
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import Loading from '../Loading/Loading';

export default class CourseDetails extends Component {

    constructor(props) {
        super();
        this.state = {
            courseId: props.courseId,
            title: '',
            description: '',
            students: '',
            lectures: '',
            skills: '',
            video_url: '',
            course_url: '',
            loading: true
        };
    }

    componentDidMount() {
        RestClient.getRequest(AppUrl.courseDetails + this.state.courseId)
            .then(result => {
                this.setState({
                    title: result[0].long_title,
                    description: result[0].long_desc,
                    students: result[0].total_students,
                    lectures: result[0].total_lecture,
                    skills: result[0].all_skills,
                    video_url: result[0].course_video,
                    course_url: result[0].course_link,
                    loading: false
                });
            });
    }

    render() {
        if (this.state.loading == true) {
            return <Loading></Loading>;
        } else {
            const { title, description, students, lectures, skills, video_url, course_url } = this.state;
            return (
                <Fragment>
                    <Container fluid="true" className="pageTopBanner">
                        <div className="pageTopBannerOverlay">
                            <Container>
                                <Row className="p-0 m-0" className="courseDetailsTop">
                                    <Col lg={6} md={6} sm={12}>
                                        <h2 className="courseDetailsTitle">{title}</h2>
                                        <p className="courseDetailsNumber">Total lectures: {lectures}</p>
                                        <p className="courseDetailsNumber">Total students: {students}</p>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <p className="courseDetailsDesc">{description}</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Container>

                    <Container className="courseDetailsBody">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <h2>Skills you will get</h2>
                                {HtmlParser(skills)}
                                <Button href={this.state.course_url} target="_blank" variant="primary recentBtn">Buy Now</Button>
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
}
