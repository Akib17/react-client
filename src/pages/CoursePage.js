import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/TopNavigation/TopNavigation'
import PageTopBanner from '../component/PageTopBanner/PageTopBanner'
import AllCourse from '../component/AllCourse/AllCourse'
import Footer from '../component/Footer/Footer'

export default class CoursePage extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Courses"></TopNavigation>
                <PageTopBanner pageTitle="Our courses"></PageTopBanner>
                <AllCourse></AllCourse>
                <Footer></Footer>
            </Fragment>
        )
    }
}
