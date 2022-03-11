import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import CoursePage from "../pages/CoursePage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import ServicePage from "../pages/ServicePage";

class AppRoute extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/services' component={ServicePage} />
                    <Route exact path='/courses' component={CoursePage} />
                    <Route exact path='/portfolio' component={PortfolioPage} />
                    <Route exact path='/contact' component={ContactPage} />
                    <Route exact path='/about' component={AboutPage} />
                </Switch>
            </>
        );
    }
}

export default AppRoute;