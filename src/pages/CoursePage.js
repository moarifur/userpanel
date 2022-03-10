import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import AllCourses from "../components/AllCourses/AllCourses";

class CoursePage extends Component {
    render() {
        return (
            <>
                <TopNavigation/> {/*For navigation bar*/}
                <PageTop title='All Courses'/> {/*For common page top section*/}
                <AllCourses /> {/*Course Details*/}
                <Footer /> {/*For footer*/}
            </>
        );
    }
}

export default CoursePage;


