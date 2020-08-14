import React, { Component, Fragment } from 'react';
import PageTopBanner from '../component/PageTopBanner/PageTopBanner';
import TermsCondition from '../component/TermsCondition/Terms&Condition';
import Footer from '../component/Footer/Footer';
import TopNavigation from '../component/TopNavigation/TopNavigation';

export default class TermsPage extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Terms & Condition"></TopNavigation>
                <PageTopBanner pageTitle="Terms & Condition"></PageTopBanner>
                <TermsCondition></TermsCondition>
                <Footer></Footer>
            </Fragment>
        );
    }
}
