import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import AllProjects from "../components/AllProjects/AllProjects";

class PortfolioPage extends Component {
    render() {
        return (
            <>
                <TopNavigation/> {/*For navigation bar*/}
                <PageTop title='Portfolio'/> {/*For common page top section*/}
                <AllProjects /> {/*Project Details*/}
                <Footer /> {/*For footer*/}
            </>
        );
    }
}

export default PortfolioPage;