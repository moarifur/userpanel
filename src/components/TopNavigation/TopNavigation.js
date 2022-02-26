import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

import whiteLogo from '../../asset/image/navlogo.svg'
import blueLogo from '../../asset/image/navlogoScroll.svg'

import '../../asset/css/custom.css'

class TopNavigation extends Component {
    constructor(props){
        super(props);
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[whiteLogo],
            navBarBack:"navBackground",
            navBarItem:"navItem"
        }
    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({
                navBarTitle:'navTitleScroll',
                navBarLogo:[blueLogo],
                navBarBack:'navBackgroundScroll',
                navBarItem:'navItemScroll'
            })
        }
        else if(window.scrollY<100){
            this.setState({
                navBarTitle:'navTitle',
                navBarLogo:[whiteLogo],
                navBarBack:'navBackground',
                navBarItem:'navItem'
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <Navbar
                    className={this.state.navBarBack}
                    fixed='top'
                    collapseOnSelect
                    expand="lg"
                    variant="dark"
                >
                    <Container>
                        <Navbar.Brand className={this.state.navBarTitle}>
                            <img src={this.state.navBarLogo} alt=''/>
                            &nbsp; {/* Put a space between logo and title */}
                            Mohammad Rahman
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link className={this.state.navBarItem} href="#">HOME</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#">SERVICES</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#">COURSES</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#">PORTFOLIO</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#">CONTACT</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#">ABOUT</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;

