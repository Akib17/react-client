import React, { Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

const Services = (props) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        RestClient.getRequest(AppUrl.services)
            .then(res => {
                if (res == null) {
                    setError(true);
                    setLoading(false);
                } else {
                    setData(res);
                    setLoading(false);
                }
            })
            .catch(err => {
                setError(true)
            });
    }, []);

    if (loading == true) {
        return <Loading></Loading>;
    } else {
        if (error == true) {
            return <Error></Error>;
        } else {
            return (
                <Fragment>
                    <Container className="serviceSection">
                        <h2 className="sectionTitle">{props.serviceTitle}</h2>
                        <Row>

                            {
                                data.map(li => (
                                    <Col lg={4} md={6} sm={12} key={li.id} >
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
        }
    }
};

export default Services;