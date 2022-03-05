import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

import course1 from '../../asset/image/course1.jpg'
import course2 from '../../asset/image/course2.jpg'
import course3 from '../../asset/image/course3.jpg'
import course4 from '../../asset/image/course4.jpg'

class Courses extends Component {
    render() {
        return (
            <>
                <Container>
                    <h1 className='componentTitle'>OUR COURSES</h1>
                    <Row>
                        {/* 1st column */}
                        <Col lg={6} md={12} sm={12}>
                            <Row className="courseRow">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={course1} alt=''/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="courseTitle">Web Development</h5>
                                    <p className="courseSubtitle">
                                        I build native and cross platform web app <br/>
                                        for your business and also mobile app for<br/>
                                        your organization

                                    </p>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a className="courseDetailsLink" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        {/* 2nd column */}
                        <Col lg={6} md={12} sm={12}>
                            <Row className="courseRow">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={course2} alt=''/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="courseTitle">Web Development</h5>
                                    <p className="courseSubtitle">
                                        I build native and cross platform web app <br/>
                                        for your business and also mobile app for<br/>
                                        your organization

                                    </p>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a className="courseDetailsLink" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        {/* 3rd column */}
                        <Col lg={6} md={12} sm={12}>
                            <Row className="courseRow">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={course3} alt=''/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="courseTitle">Web Development</h5>
                                    <p className="courseSubtitle">
                                        I build native and cross platform web app <br/>
                                        for your business and also mobile app for<br/>
                                        your organization

                                    </p>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a className="courseDetailsLink" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        {/* 4th column */}
                        <Col lg={6} md={12} sm={12}>
                            <Row className="courseRow">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={course4} alt=''/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="courseTitle">Web Development</h5>
                                    <p className="courseSubtitle">
                                        I build native and cross platform web app <br/>
                                        for your business and also mobile app for<br/>
                                        your organization

                                    </p>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a className="courseDetailsLink" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>;

            </>
        );
    }
}

export default Courses;