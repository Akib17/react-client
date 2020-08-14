import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/TopNavigation/TopNavigation'
import PageTopBanner from '../component/PageTopBanner/PageTopBanner'
import AllPortfolio from '../component/AllPortfolio/AllPortfolio'
import Footer from '../component/Footer/Footer'

export default class PortfolioPage extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Portfolio"></TopNavigation>
                <PageTopBanner pageTitle="Portfolio"></PageTopBanner>
                <AllPortfolio></AllPortfolio>
                <Footer></Footer>
            </Fragment>
        )
    }
}
