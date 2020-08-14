import React, { Component, Fragment } from 'react';
import TopNavigation from '../component/TopNavigation/TopNavigation';
import PageTopBanner from '../component/PageTopBanner/PageTopBanner';
import ProjectDetails from '../component/ProjectDetails/ProjectDetails';
import Footer from '../component/Footer/Footer';

export default class ProjectDetailsPage extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Project Details"></TopNavigation>
                <PageTopBanner pageTitle="Project Details"></PageTopBanner>
                <ProjectDetails></ProjectDetails>
                <Footer></Footer>
            </Fragment>
        );
    }
}
