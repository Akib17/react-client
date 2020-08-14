import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/TopNavigation/TopNavigation';
import PageTopBanner from '../component/PageTopBanner/PageTopBanner';
import Privacy from '../component/Privacy/Privacy';
import Footer from '../component/Footer/Footer';

export default class PrivacyPage extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title ="Privacy Policy"></TopNavigation>
                <PageTopBanner pageTitle="Privacy Policy"></PageTopBanner>
                <Privacy></Privacy>
                <Footer></Footer>
            </Fragment>
        )
    }
}
