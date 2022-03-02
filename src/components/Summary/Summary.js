import React, {Component} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

class Summary extends Component {
    render() {
        return (
            <>
                <Container className='SummaryBanner SummarySection'>
                    <div className="SummaryBannerOverlay">
                        <Container>
                            <Row>
                                <Col lg={8} md={6} sm={12}>
                                    <Row className="countSection">
                                        <Col>
                                            <h1 className="countNumber">
                                                <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start}>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countTitle">Total Projects</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>

                                        <Col>
                                            <h1 className="countNumber">
                                                <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start}>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countTitle">Total Clients</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col lg={4} md={6} sm={12}>
                                    <div className="SummaryCard">
                                        <Card>
                                            <Card.Body>
                                                <Card.Title className="cardTitle">How I Work</Card.Title>
                                                <Card.Text className="cardSubTitle">
                                                    <p>
                                                        <FontAwesomeIcon className="iconBullet" icon={faCheckCircle} />
                                                        &nbsp; Requirement Gathering
                                                    </p>
                                                    <p>
                                                        <FontAwesomeIcon className="iconBullet" icon={faCheckCircle} />
                                                        &nbsp; System Analysis
                                                    </p>
                                                    <p>
                                                        <FontAwesomeIcon className="iconBullet" icon={faCheckCircle} />
                                                        &nbsp; Code Testing
                                                    </p>
                                                    <p>
                                                        <FontAwesomeIcon className="iconBullet" icon={faCheckCircle} />
                                                        &nbsp; Implementation
                                                    </p>

                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </>
        );
    }
}

export default Summary;


