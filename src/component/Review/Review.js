import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import myImg from '../../Assets/image/my-img.jpg';
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';

export default class Review extends Component {

    constructor() {
        super();
        this.state = {
            myData: []
        };
    }

    componentDidMount() {
        RestClient.getRequest(AppUrl.clientReview)
            .then(res => {
                this.setState({
                    myData: res
                });
            });
    }

    render() {
        var settings = {
            dots: true,
            vertical: true,
            verticalSwiping: true,
            autoplaySpeed: 5000,
            autoplay: true,
            focusOnSelect: false,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        const myList = this.state.myData;
        const view = myList.map(res => {
            return <div>
                <Row>
                    <Col lg={8} md={8} sm={12} className="mx-auto">
                        <img className="reviewImg" src={res.client_img} alt="Client Image" />
                        <h2 className="reviewTitle">{res.client_title}</h2>
                        <p className="reviewDesc">{res.client_description}</p>
                    </Col>
                </Row>
            </div>;
        });

        return (
            <Fragment>
                <Container className="text-center reviewSection">
                    <h2 className="sectionTitle">What our client says</h2>
                    <Slider {...settings}>

                        {view}

                    </Slider>
                </Container>
            </Fragment>
        );
    }
}
