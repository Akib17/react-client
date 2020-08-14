import React, { Component, Fragment } from 'react'
import { Container, Row, Card, Modal, Button } from 'react-bootstrap'
import '../../../node_modules/video-react/dist/video-react.css'
import { Player } from 'video-react';
import BigPlayButton from 'video-react/lib/components/BigPlayButton';

export default class Video extends Component {

    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    modalClose = () => this.setState({ show: false })
    modalOpen = () => this.setState({ show: true })

    render() {
        return (
            <Fragment>
                <Container className="videoSection text-center">
                    <Row>
                        <Card className="videoCard border-0">
                            <h2 className="videoTitle">How I do?</h2>
                            <p className="videoDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid fugit atque nemo ex, amet voluptatem totam, fuga tempore eos iure aspernatur alias laborum repellat sint, ducimus enim sed non. Cum, aliquid consequuntur. Consectetur aspernatur corporis accusantium maiores fuga eius molestiae!</p>
                            <span onClick={this.modalOpen}><i class="far fa-play-circle"></i></span>
                        </Card>
                    </Row>
                </Container>


                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                    <Modal.Body>
                        <Player>
                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
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
        )
    }
}
