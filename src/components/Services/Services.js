import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

import webLogo from '../../asset/image/web.svg'
import mobileLogo from '../../asset/image/mobile.svg'
import graphicsLogo from '../../asset/image/graphics.svg'

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h1 className='componentTitle'>MY SERVICES</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={webLogo} />
                                <h2 className='serviceTitle'>Web Development</h2>
                                <p className='serviceDescription'>
                                    I design and develop static and dynamic web sites
                                    as per your requirements as we believe, “web is
                                    world’s next home”.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={mobileLogo} />
                                <h2 className='serviceTitle'>Mobile Development</h2>
                                <p className='serviceDescription'>
                                    I build native and cross platform mobile app
                                    for your business and institution as per as
                                    your requirements.
                                </p>
                            </div>

                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={graphicsLogo} />
                                <h2 className='serviceTitle'>Graphics Design</h2>
                                <p className='serviceDescription'>
                                    I design modern user interface and other graphical
                                    components for your business and institution.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
export default Services;
