import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TopNavigation from "../TopNavigation/TopNavigation";

class PageTop extends Component {
    render() {
        return (
            <Fragment>
                {/*For navigation bar*/}
                <TopNavigation/>
                {/*For common page top section*/}
                <Container fluid={true} className="topFixedPage p-0" >
                    <div className="topPageOverlay">
                        <Container className="topPageContent">
                            <Row>
                                <Col className="text-center">
                                    <h4 className="pageTitle">{this.props.title}</h4>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}
export default PageTop;