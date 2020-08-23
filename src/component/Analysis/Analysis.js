import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from 'recharts';
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import Error from '../Error/Error';

export default class Analysis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            description: '',
            error: false
        };
    }

    componentDidMount() {
        RestClient.getRequest(AppUrl.chartData)
            .then(res => {
                if (res == null) {
                    this.setState({
                        error: true
                    });
                } else {
                    this.setState({
                        data: res
                    });
                }
            })
            .catch(err => {
                this.setState({ error: true });
            });
        RestClient.getRequest(AppUrl.techDesc)
            .then(result => {
                if (result == null) {
                    this.setState({ error: true });
                } else {
                    this.setState({
                        description: result[0].tech_description
                    });
                }
            })
            .catch(err => {
                this.setState({
                    error: true
                });
            });
    }

    render() {
        return (
            <Fragment>
                <Container className="text-center technology">
                    <h2 className="sectionTitle">Technology Used</h2>
                    <Row>
                        <Col style={{ width: '100%', height: '300px' }} lg={6} md={12} sm={12}>
                            {
                                this.state.error ? (
                                    <div className="my-5">
                                        <Error></Error>
                                    </div>
                                ) : (
                                        <ResponsiveContainer>
                                            <BarChart width={100} height={300} data={this.state.data}>
                                                <XAxis dataKey="Technology" ></XAxis>
                                                <Tooltip></Tooltip>
                                                <Bar dataKey="Projects" fill="#2c2583"></Bar>
                                            </BarChart>
                                        </ResponsiveContainer>
                                    )
                            }
                        </Col>
                        <Col lg={6} md={12}>
                            {
                                this.state.error ? (
                                    <div>
                                        <Error></Error>
                                    </div>
                                ) : (
                                        <p className="text-justify techDes">
                                            {ReactHtmlParser(this.state.description)}
                                        </p>
                                    )
                            }
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
