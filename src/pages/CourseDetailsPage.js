import React, { Component, Fragment } from 'react';
import TopNavigation from '../component/TopNavigation/TopNavigation';
import Footer from '../component/Footer/Footer';
import CourseDetails from '../component/CourseDetails/CourseDetails';
import RestClient from '../RestApi/RestClient';
import AppUrl from '../RestApi/AppUrl';

export default class CourseDetailsPage extends Component {

    constructor({ match }) {
        super();
        this.state = {
            courseId: match.params.courseId
        };
    }

    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation></TopNavigation>
                <CourseDetails courseId={this.state.courseId} ></CourseDetails>
                <Footer></Footer>
            </Fragment>
        );
    }
}
