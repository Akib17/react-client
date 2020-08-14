import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/TopNavigation/TopNavigation'
import PageTopBanner from '../component/PageTopBanner/PageTopBanner'
import Contact from '../component/Contact/Contact'
import Footer from '../component/Footer/Footer'
import Services from '../component/Services/Services'

export default class ServicePage extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Services"></TopNavigation>
                <PageTopBanner pageTitle="My services"></PageTopBanner>
                <Services></Services>
                <Contact></Contact>
                <Footer></Footer>
            </Fragment>
        )
    }
}
