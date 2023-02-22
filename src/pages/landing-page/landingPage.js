import React from "react"
import Header from "../../components/header/header";
import PageOne from "../../components/page-one/pageOne";
import Projects from "../../components/page-two/pageTwo";
import { withRouter } from "../../withRouter"
import './landingPage.css'

class LandingPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }

    render() {
        return (
            <div className="landing-page">
                <Header></Header>
                <div className="page-1" id="page-1">
                    <PageOne></PageOne>
                </div>
                <div className="page-2" id='page-2'>
                    <Projects></Projects>
                </div>
            </div>
        );
    }
}

export default withRouter(LandingPage);
