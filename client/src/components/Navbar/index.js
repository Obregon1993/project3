import React from "react"
import { Link } from "react-router-dom"
import Newlogo from "./Newlogo.png"
// import LoginModal from "../LoginModal"


class Navbar extends React.Component {
    // state = {
    //     modalOpen: false
    // }

    // handleModalOpen = () => {
    //     this.setState((prevState) => {
    //         return {
    //             modalOpen: !prevState.modalOpen
    //         }
    //     })
    // }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper black">
                        <div style={{ float: 'left', marginTop: '-15px' }}>
                            <Link to="/"><img src={Newlogo} alt="icon" height="100" width="100" className="brand-logo"></img></Link>
                        </div>
                        <ul id="nav-mobile" className="hide-on-med-and-down" style={{ marginLeft: '100px' }}>

                            <li><Link to="/login" className="red-text text-darken-4"><strong>Login</strong></Link></li>
                            <li><Link to="/register" className="red-text text-darken-4"><strong>Sign Up</strong></Link></li>
                        </ul>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/login" className="waves-effect waves-light btn-small red darken-4 white-text"><i class="material-icons right">arrow_forward</i>Get Started</Link></li>
                            {/* <!-- Modal Trigger --> */}
                            {/* <li><a onClick={this.handleModalOpen} className="nav-link">Modal</a></li> */}
                        </ul>
                    </div>
                </nav>
                {/* <LoginModal
                    modalOpen={this.state.modalOpen}
                    handleModalOpen={this.handleModalOpen}
                /> */}
            </div>
        )
    }
};

export default Navbar;