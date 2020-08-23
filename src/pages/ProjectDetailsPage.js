import React, { Component, Fragment } from 'react';
import TopNavigation from '../component/TopNavigation/TopNavigation';
import PageTopBanner from '../component/PageTopBanner/PageTopBanner';
import ProjectDetails from '../component/ProjectDetails/ProjectDetails';
import Footer from '../component/Footer/Footer';

export default class ProjectDetailsPage extends Component {
    constructor({match}) {
        super()
        this.state = {
            projectId: match.params.projectId,
            projectName: match.params.projectName
        }
    }
    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Project Details"></TopNavigation>
                <PageTopBanner pageTitle={this.state.projectName}></PageTopBanner>
                <ProjectDetails id={this.state.projectId}></ProjectDetails>
                <Footer></Footer>
            </Fragment>
        );
    }
}
