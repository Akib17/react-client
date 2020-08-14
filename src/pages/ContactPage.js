import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/TopNavigation/TopNavigation'
import PageTopBanner from '../component/PageTopBanner/PageTopBanner'
import Contact from '../component/Contact/Contact'
import Footer from '../component/Footer/Footer'

export default class ContactPage extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Contact us"></TopNavigation>
                <PageTopBanner pageTitle="Contact us"></PageTopBanner>
                <Contact></Contact>
                <Footer></Footer>
            </Fragment>
        )
    }
}
