import React, { Component } from "react"
import TopNavigation from "../components/TopNavigation/TopNavigation"
import PageTop from "../components/PageTop/PageTop"
import AboutDescription from "../components/AboutDescription/AboutDescription"
import Footer from "../components/Footer/Footer"

class AboutPage extends Component {
    render() {
        return (
            <>
                <TopNavigation />  {/*For navigation bar*/}
                <PageTop title="About Me" /> {/*For common page top section*/}
                <AboutDescription /> {/*Details about me*/}
                <Footer /> {/*For footer*/}
            </>
        )
    }
}
export default AboutPage