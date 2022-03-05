import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {ResponsiveContainer, BarChart, XAxis, Tooltip, Bar, YAxis, Legend, CartesianGrid} from "recharts";

class Analysis extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[
                {Technology:'Java', Projects:100},
                {Technology:'Kotlin', Projects:40},
                {Technology:'Sql', Projects:90},
                {Technology:'Vue', Projects:95},
                {Technology:'Jquery', Projects:60},
                {Technology:'React', Projects:90},
                {Technology:'PHP', Projects:100},
                {Technology:'Angular', Projects:65}
            ]
        }
    }
    render() {
        return (
            <Fragment>
                <Container>
                    <h1 className='componentTitle'>Technology Used</h1>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={this.state.data}>
                                    {/*<CartesianGrid strokeDasharray="3 3" />*/}
                                    <XAxis dataKey='Technology'/>
                                    <Bar dataKey='Projects' fill={'#2C82C9'}>
                                    </Bar>
                                    {/*<YAxis />*/}
                                    <Tooltip />
                                    {/*<Legend />*/}
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className='article'>
                                To build native android apps I use Java as well as kotline mainly.
                                React JS is used for cross platform mobile application. I use MySQL
                                database for relational database system. To build NoSQL application
                                I use MongoDB. Firebase database system is used where it is necessary
                                to provide realtime data flow facilities.
                                <pre/>
                                I always build dynamic application. Admin panel is the heart of such
                                kinds of application. I always try to provide sufficient features in
                                admin panel to dominate application. According to client demand
                                I use PHP OOP, CodeIgniter and Laravel to build admin panel section.
                                <pre/>
                                Application security is a big deal for commercial application.
                                I always ensure security portion of my application, moreover I build
                                a security alert system, to notify admin when his system at risk.
                                <pre/>
                                Application security is a big deal for commercial application.
                                I always ensure security portion of my application, moreover I build
                                a security alert system, to notify admin when his system at risk.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;

