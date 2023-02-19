import React from "react"
import Header from "../../components/header/header";
import Text from "../../components/landing-page/text";
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
                <Text></Text>
            </div>
        );
    }
}

export default withRouter(LandingPage);
