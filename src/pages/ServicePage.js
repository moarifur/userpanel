import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import Services from "../components/Services/Services";

class ServicePage extends Component {
    render() {
        return (
            <>
                <TopNavigation/> {/*For navigation bar*/}
                <PageTop title='My Services'/> {/*For common page top section*/}
                <Services /> {/*Project Details*/}
                <Footer /> {/*For footer*/}
            </>
        );
    }
}

export default ServicePage;