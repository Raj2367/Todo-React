import React from "react";
import { Link, Route, BrowserRouter as Router, Redirect } from "react-router-dom";

import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import { Navbar } from "./Navbar";

class Layout extends React.Component {
    /** 
     * initialise the state of logedin as false 
     */
    constructor() {
        super();
        this.state = {
            logedin: false,
            darkmode: false
        }
    }

    /**
     *  Everytime change the state of darkmode when darkmodeHandle function is called
     */
    darkmodeHandle=()=>{
        this.setState(prev=>({
            darkmode: !prev.darkmode
        }))
    }    
    /**
     * Everytime change the state of logedin when loginHandle function is called
     */
    loginHandle = () => {
        this.setState(prev => ({
            logedin: !prev.logedin
        }));

        {/** 
         * add or remove localstorage item on the basis of logedin state value
         */}
        if (!this.state.logedin) {
            localStorage.setItem("logedin", "true");
        } else {
            localStorage.removeItem("logedin");
        }
    }

    render() {        
        const condition=this.state.darkmode;
        return (
            <div {...(condition?{style:{height:"100vh",backgroundColor:"rgb(33, 37, 41)"}}:{style:{height:"100vh",backgroundColor:"white"}})}>
                <Router>
                    {/** 
                     *  navbar containing company logo, regstration and login button  
                     */}
                    <div className="container">
                        <Navbar
                            logedin={this.state.logedin}
                            loginHandle={this.loginHandle}
                            darkmode={this.state.darkmode}
                            darkmodeHandle={this.darkmodeHandle}
                        />                        
                    </div>

                    {/**
                     * Routes to different components
                     */}
                    <Route path='/' exact render={() => (
                        <Home 
                            loginHandle={this.loginHandle} 
                            darkmode={this.state.darkmode}
                        />
                    )} />
                    <Route path='/home' render={() => (
                        <Home 
                            loginHandle={this.loginHandle} 
                            darkmode={this.state.darkmode}
                        />
                    )} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" render={() => (
                        this.state.logedin ? <Login darkmode={this.state.darkmode}/> : <Redirect to='/home' />
                    )} />
                </Router>
            </div>
        );
    }
}
export default Layout;
