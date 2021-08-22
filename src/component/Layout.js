import React from "react";
import { Link, Route, BrowserRouter as Router, Redirect } from "react-router-dom";

import Home from "./Home";
import Register from "./Register";
import Login from "./Login";

class Layout extends React.Component {    
    /** 
     * initialise the state of logedin as false 
     */
    constructor(){
        super();
        this.state = {
            logedin: false
        }
    }
    /**
     * Everytime change the state of logedin when loginHandle function is called
     */
    loginHandle = () => {
        this.setState(prev => ({
            logedin: !prev.logedin
        }));
    }
    render() {
        return (
            <Router>
                {/** 
                 *  navbar containing company logo, regstration and login button  
                 */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <img className="img-thumbnail" src="companyLogo.png" />
                        {/** navbar for the smaller screen size */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                            <form className="d-flex">
                                <Link className={this.state.logedin ? "btn btn-outline-success disabled" : "btn btn-outline-success"} type="submit" to="/register">Register</Link> &nbsp;
                                <Link to="/login"><input className="btn btn-outline-success" type="button" value={this.state.logedin ? "logout" : "login"} onClick={this.loginHandle} /></Link>
                            </form>
                        </div>
                    </div>
                </nav>

                 {/**
                  * Routes to different components
                  */}
                <Route path='/' exact render={Home} />
                <Route path='/home' render={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" render={() => (
                    this.state.logedin ? <Login /> : <Redirect to='/home' />
                )} />
            </Router>
        );
    }
}
export default Layout;
