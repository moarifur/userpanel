import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";

class ContactPage extends Component {
    render() {
        return (
            <>
                <TopNavigation />  {/*For navigation bar*/}
                <PageTop title="Contact Us" /> {/*For common page top section*/}
                <ContactSection /> {/*Details about me*/}
                <Footer /> {/*For footer*/}
            </>
        );
    }
}

export default ContactPage;