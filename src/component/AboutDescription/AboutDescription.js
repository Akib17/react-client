import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

export default class AboutDescription extends Component {

    constructor() {
        super();
        this.state = {
            desc: [],
            loading: true,
            error: false
        };
    }

    componentDidMount() {
        RestClient.getRequest(AppUrl.legal)
            .then(res => {
                if (res == null) {
                    this.setState({ error: true, loading: false });
                } else {
                    res.map(li => {
                        this.setState({
                            desc: li,
                            loading: false
                        });
                    });
                }
            });
    }

    render() {

        if (this.state.loading == true) {
            return <Loading></Loading>;
        } else if(this.state.loading == false && this.state.error == false) {
            return (
                <Fragment>
                    <Container className="mt-5">
                        <Row>
                            <Col>
                                {ReactHtmlParser(this.state.desc.about_me)}
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        } else if (this.state.error == true && this.state.loading == false) {
            return <Error></Error>
        }


    }
}
