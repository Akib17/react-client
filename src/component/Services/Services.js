import React, { Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';

const Services = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        RestClient.getRequest(AppUrl.services)
            .then(res => {
                setData(res);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <Fragment>
            <Container className="serviceSection">
                <h2 className="sectionTitle">{props.serviceTitle}</h2>
                <Row>

                    {
                        data.map(li => (
                            <Col lg={4} md={6} sm={12}>
                                <div className="serviceCard">
                                    <span> <i class={li.icon}></i> </span>
                                    <h2> {li.title} </h2>
                                    <p> {li.description} </p>
                                </div>
                            </Col>
                        ))
                    }

                </Row>
            </Container>
        </Fragment>
    );
};

export default Services;