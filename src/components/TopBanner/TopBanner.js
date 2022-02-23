import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

import '../../asset/css/custom.css'

class TopBanner extends Component {
  render() {
    return (
        <Fragment>
          <Container className='topFixedBanner'>
              <div className="topBannerOverlay">
                  <Container className='topContent'>
                      <Row>
                          <Col className='text-center'>
                              <h1 className="topTitle">SOFTWARE ENGINEER</h1>
                              <h4 className="topSubTitle">Mobile & Web Application</h4>
                              <Button variant='primary'>More</Button>
                          </Col>
                      </Row>
                  </Container>
              </div>
          </Container>
        </Fragment>
    );
  }
}

export default TopBanner;



