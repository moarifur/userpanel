import React, {Component, Fragment} from 'react';
import {Col, Row} from "react-bootstrap";
import Slider from "react-slick";

import pic1 from '../../asset/image/course1.jpg'
import pic2 from '../../asset/image/course2.jpg'
import pic3 from '../../asset/image/course3.jpg'

// Import css files for react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ClientReview extends Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            vertical: true,
            verticalSwiping: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
        return (
            <>
                <h1 className='componentTitle'>CLIENT REVIEW</h1>
                <Slider {...settings}>
                    <div>
                        <Row className="text-center justify-content-center">
                            <Col lg={6} md={6} sm={12}>
                                <img className="circleImg" src={pic1} alt=''/>
                                <h2 className='serviceTitle'>Web Development</h2>
                                <p className='serviceDescription'>
                                    I design and develop static and dynamic web sites
                                    as per your requirements as we believe, “web is
                                    world’s next home”. <br/>
                                    I build native and cross platform mobile app
                                    for your business and institution as per as
                                    your requirements. <br/>
                                    I design modern user interface and other graphical
                                    components for your business and institution.
                                </p>
                            </Col>
                        </Row>
                    </div>

                    <div>
                        <Row className="text-center justify-content-center">
                            <Col lg={6} md={6} sm={12}>
                                <img className="circleImg" src={pic2} alt=''/>
                                <h2 className='serviceTitle'>Mobile Development</h2>
                                <p className='serviceDescription'>
                                    I design and develop static and dynamic web sites
                                    as per your requirements as we believe, “web is
                                    world’s next home”. <br/>
                                    I build native and cross platform mobile app
                                    for your business and institution as per as
                                    your requirements. <br/>
                                    I design modern user interface and other graphical
                                    components for your business and institution.
                                </p>
                            </Col>
                        </Row>
                    </div>

                    <div>
                        <Row className="text-center justify-content-center">
                            <Col lg={6} md={6} sm={12}>
                                <img className="circleImg" src={pic3} alt=''/>
                                <h2 className='serviceTitle'>Graphics Design</h2>
                                <p className='serviceDescription'>
                                    I design and develop static and dynamic web sites
                                    as per your requirements as we believe, “web is
                                    world’s next home”. <br/>
                                    I build native and cross platform mobile app
                                    for your business and institution as per as
                                    your requirements. <br/>
                                    I design modern user interface and other graphical
                                    components for your business and institution.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Slider>
            </>
        );
    }
}

export default ClientReview;
