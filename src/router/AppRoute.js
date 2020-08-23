import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router'
import HomePage from '../pages/HomePage'
import ServicePage from '../pages/ServicePage'
import PortfolioPage from '../pages/PortfolioPage'
import CoursePage from '../pages/CoursePage'
import ContactPage from '../pages/ContactPage'
import AboutPage from '../pages/AboutPage'
import RefundPage from '../pages/RefundPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';

export default class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/service" component={ServicePage} />
                    <Route exact path="/course" component={CoursePage} />
                    <Route exact path="/portfolio" component={PortfolioPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/refund" component={RefundPage} />
                    <Route exact path="/term" component={TermsPage} />
                    <Route exact path="/privacy" component={PrivacyPage} />
                    <Route exact path="/projectDetails/:projectId/:projectName" component={ProjectDetailsPage} />
                    <Route exact path="/courseDetails/:courseId/" component={CourseDetailsPage} />
                </Switch>
            </Fragment>
        )
    }
}
