import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faMobileScreenButton} from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
    render() {
        return (
            <>
               <Container fluid={true} className='footerSection text-center'>
                   <Row>
                       <Col lg={3} md={6} sm={12} className='p-5 footerItem'>
                           <h3 className='footerItemTitle'>Follow Me</h3>
                           <a href='https://www.facebook.com/' className="socialMediaLink">
                               <FontAwesomeIcon className="iconFacebook" icon={faFacebook} />
                               &nbsp; Facebook
                           </a>
                           <br/>
                           <a href='https://www.youtube.com/' className="socialMediaLink" >
                               <FontAwesomeIcon className="iconYoutube" icon={faYoutube} />
                               &nbsp; YouTube
                           </a>
                       </Col>
                       <Col lg={3} md={6} sm={12} className='p-5 footerItem'>
                           <h3 className='footerItemTitle'>Address</h3>
                           <p className='footerItemSubtitle'>
                               #79/6 Padma Residential <br/>
                               Area, 3rd Floor, Front Side, <br/>
                               Rajshahi
                           </p>
                           <p className='footerItemSubtitle'>
                               <FontAwesomeIcon icon={faEnvelope} />
                               <br/>
                               arif201@gmail.com
                           </p>
                           <p className='serviceDescription'>
                               <FontAwesomeIcon icon={faMobileScreenButton} />
                               &nbsp; +8801701063280
                           </p>
                       </Col>
                       <Col lg={3} md={6} sm={12} className='p-5 footerItem'>
                           <h3 className='footerItemTitle'>Information</h3>
                           <a href="#" className='footerItemSubtitle'>About Me</a>
                           <br/>
                           <a href="#" className='footerItemSubtitle'>My Resume</a>
                           <br/>
                           <a href="#" className='footerItemSubtitle'>Contact Me</a>
                       </Col>
                       <Col lg={3} md={6} sm={12} className='p-5 footerItem'>
                           <h3 className='footerItemTitle'>Legal</h3>
                           <a href="#" className='footerItemSubtitle'> Refund Policy</a>
                           <br/>
                           <a href="#" className='footerItemSubtitle'> Terms and Condition</a>
                           <br/>
                           <a href="#" className='footerItemSubtitle'> Privacy Policy</a>
                       </Col>
                   </Row>
               </Container>

               <Container fluid={true} className="text-center copyrightSection">
                   <a className="copyrightLink" href="#">jaanpakhi.com &copy;2019-2020</a>
               </Container>
            </>
        );
    }
}

export default Footer;

