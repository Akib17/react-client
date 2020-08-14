import React, { Component, Fragment } from 'react';
import TopNavigation from '../component/TopNavigation/TopNavigation';
import AboutDescription from '../component/AboutDescription/AboutDescription';
import Footer from '../component/Footer/Footer';
import PageTopBanner from '../component/PageTopBanner/PageTopBanner';

export default class AboutPage extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="About us"></TopNavigation>
                <PageTopBanner pageTitle="About us"></PageTopBanner>
                <AboutDescription></AboutDescription>
                <Footer></Footer>
            </Fragment>
        );
    }
}
