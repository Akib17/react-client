import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/TopNavigation/TopNavigation';
import TopBanner from '../component/TopBanner/TopBanner';
import RefundPolicy from '../component/RefundPolicy/RefundPolicy';
import Footer from '../component/Footer/Footer';
import PageTopBanner from '../component/PageTopBanner/PageTopBanner';

export default class RefundPage extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Refund policy"></TopNavigation>
                <PageTopBanner pageTitle="Refund policy"></PageTopBanner>
                <RefundPolicy></RefundPolicy>
                <Footer></Footer>
            </Fragment>
        )
    }
}
