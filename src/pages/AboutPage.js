import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AboutDescription from "../components/AboutDescription/AboutDescription";
import Footer from "../components/Footer/Footer";

class AboutPage extends Component {
    render() {
        return (
            <>
                {/*For navigation bar*/}
                <TopNavigation/>
                {/*For common page top section*/}
                <PageTop title='About Me'/>
                {/*Details about me*/}
                <AboutDescription />
                {/*For footer*/}
                <Footer />
            </>
        );
    }
}

export default AboutPage;