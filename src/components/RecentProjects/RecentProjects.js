import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";

import card1 from '../../asset/image/card1.jpg'
import card2 from '../../asset/image/card2.jpg'
import card3 from '../../asset/image/card3.jpg'

class RecentProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h1 className='componentTitle'>RECENT PROJECTS</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12} className='p-2'>
                            <Card className='projectCard'>
                                <Card.Img className='projectCardImg' variant="top" src={card1} />
                                <Card.Body className='text-center'>
                                    <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                    <Card.Text className='projectCardSubtitle'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='p-2'>
                            <Card className='projectCard'>
                                <Card.Img className='projectCardImg' variant="top" src={card2} />
                                <Card.Body className='text-center'>
                                    <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                    <Card.Text className='projectCardSubtitle'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='p-2'>
                            <Card className='projectCard'>
                                <Card.Img className='projectCardImg' variant="top" src={card3} />
                                <Card.Body className='text-center'>
                                    <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                    <Card.Text className='projectCardSubtitle'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RecentProjects;

