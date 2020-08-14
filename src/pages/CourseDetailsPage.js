import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/TopNavigation/TopNavigation';
import Footer from '../component/Footer/Footer';
import CourseDetails from '../component/CourseDetails/CourseDetails';

export default class CourseDetailsPage extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation></TopNavigation>
                <CourseDetails></CourseDetails>
                <Footer></Footer>
            </Fragment>
        )
    }
}
