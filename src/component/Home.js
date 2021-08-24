/**
 * home component
 */
import React from "react";
import { Link } from "react-router-dom";
import { isAuth } from "../Auth"

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        if (isAuth()) {
            alert("you are already logedin");
        }
        const condition = this.props.darkmode;
        return (
            <div className="container">
                <form>
                    <br />
                    <div className="form-group">
                        <h4>
                            <label htmlFor="username"
                                {...(condition ?
                                    { style: { color: "white" } } :
                                    { style: { color: "black" } })}>
                                User Name
                            </label>
                        </h4>
                        <input type="text"
                            className="form-control"
                            name="username"
                            placeholder="Enter name"/>
                    </div>
                    <div className="form-group">
                        <h4>
                            <label htmlFor="password"
                                {...(condition ?
                                    { style: { color: "white" } } :
                                    { style: { color: "black" } })}>
                                Password
                            </label>
                        </h4>
                        <input type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            placeholder="Password"/>
                    </div>
                    <br />
                    <Link to="/login">
                        <button type="submit"
                            className="btn btn-primary"
                            onClick={this.props.loginHandle}>
                            Login
                        </button>
                    </Link>
                </form>
            </div>
        );
    }
}

export default Home;
