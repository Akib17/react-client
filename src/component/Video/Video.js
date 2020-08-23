import React, { Component, Fragment } from 'react';
import { Container, Row, Card, Modal, Button } from 'react-bootstrap';
import '../../../node_modules/video-react/dist/video-react.css';
import { Player } from 'video-react';
import BigPlayButton from 'video-react/lib/components/BigPlayButton';
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import Error from '../Error/Error';

export default class Video extends Component {

    constructor() {
        super();
        this.state = {
            show: false,
            video_desc: '',
            video_url: '',
            error: false
        };
    }

    componentDidMount() {
        RestClient.getRequest(AppUrl.videoHome)
            .then(res => {
                if (res == null) {
                    this.setState({ error: true });
                } else {
                    this.setState({
                        video_desc: res[0].video_description,
                        video_url: res[0].video_url
                    });
                }
            });
    }

    modalClose = () => this.setState({ show: false });
    modalOpen = () => this.setState({ show: true });

    render() {
        const { video_desc, video_url } = this.state;
        if (this.state.error == true) {
            return <Error></Error>;
        } else {
            return (
                <Fragment>
                    <Container className="videoSection text-center">
                        <Row>
                            <Card className="videoCard border-0">
                                <h2 className="videoTitle">How I do?</h2>
                                <p className="videoDesc"> {video_desc} </p>
                                <span onClick={this.modalOpen}><i class="far fa-play-circle"></i></span>
                            </Card>
                        </Row>
                    </Container>

                    <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                        <Modal.Body>
                            <Player>
                                <source src={video_url} />
                                <BigPlayButton position="center"></BigPlayButton>
                            </Player>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="modalBtn" variant="info" onClick={this.modalClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </Fragment>
            );
        }
    }
}
