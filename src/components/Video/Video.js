import React, {Component} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";

import "video-react/dist/video-react.css"
import {Player, BigPlayButton} from 'video-react'

import mahdi from '../../asset/video/2_big_signs.mp4'

class Video extends Component {
    constructor(props){
        super(props);
        this.state={
            show:false
        }
    }
    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})

   render() {
        return (
            <>
                <Container className="text-center">
                    <Row>
                        <Col lg={12} md={12} sm={12} className="videoCard">
                            <div>
                                <p className="videoTitle">How I Do</p>
                                <p className="videoSubtitle">
                                    First I analysis the requirement of project. According
                                    to the requirement I make a proper technical analysis,
                                    then I build a software architecture. According to the
                                    planning I start coding. Testing is also going on with coding.
                                    Final testing take place after finishing coding part. After
                                    successful implementation I provide 6 month free bug fixing
                                    service for corresponding project.
                                </p>
                                <p>
                                    <FontAwesomeIcon
                                        className="playBtn"
                                        icon={faPlayCircle}
                                        onClick={this.modalOpen}
                                    />
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Modal size='lg' show={this.state.show} onHide={this.modalClose}>
                    <Modal.Body>
                        <Player
                            poster="../../asset/image/course4.jpg"
                            // src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                            src={mahdi}
                        >
                            <BigPlayButton position="center" />
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.modalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default Video;

