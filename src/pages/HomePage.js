import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/TopNavigation/TopNavigation'
import TopBanner from '../component/TopBanner/TopBanner'
import Services from '../component/Services/Services'
import Analysis from '../component/Analysis/Analysis'
import Summary from '../component/Summary/Summary'
import RecentProject from '../component/RecentProject/RecentProject'
import Video from '../component/Video/Video'
import Review from '../component/Review/Review'
import Footer from '../component/Footer/Footer'
import Courses from '../component/Courses/Courses'

export default class HomePage extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Home"></TopNavigation>
                <TopBanner></TopBanner>
                <Services serviceTitle="My Services"></Services>
                <Analysis></Analysis>
                <Summary></Summary>
                <RecentProject></RecentProject>
                <Courses></Courses>
                <Video></Video>
                <Review></Review>
                <Footer></Footer>
            </Fragment>
        )
    }
}
