import React, {Component} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMobileScreenButton} from "@fortawesome/free-solid-svg-icons";

class ContactSection extends Component {
    render() {
        return (
            <>
                <Container className='mt-5'>
                    <Row>
                        {/*1st Column: Form*/}
                        <Col lg={6} md={6} sm={12}>
                            <h3 className='serviceTitle'>Quick Connect</h3>
                            <Form>
                                {/* Name */}
                                <Form.Group className="mb-3">
                                    <Form.Label className='serviceDescription'>Name</Form.Label>
                                    <Form.Control type="email"/>
                                </Form.Group>
                                {/* Email */}
                                <Form.Group className="mb-3">
                                    <Form.Label className='serviceDescription'>Email address</Form.Label>
                                    <Form.Control type="email"/>
                                </Form.Group>
                                {/* Message */}
                                <Form.Group className="mb-3">
                                    <Form.Label className='serviceDescription'>Your Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        {/*2nd Column: Contact Info*/}
                        <Col lg={6} md={6} sm={12} className='contactDetails'>
                            <h3 className='serviceTitle'>Discuss Now</h3>
                            <p className='serviceDescription'>
                                #79/6 Padma Residential <br/>
                                Area, 3rd Floor, Front Side, <br/>
                                Rajshahi
                            </p>
                            <p className='serviceDescription'>
                                <FontAwesomeIcon icon={faEnvelope} />
                                &nbsp; arif201@gmail.com
                            </p>
                            <p className='serviceDescription'>
                                <FontAwesomeIcon icon={faMobileScreenButton} />
                                &nbsp; +8801701063280
                            </p>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default ContactSection;