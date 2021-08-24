import React from "react";
import { Link } from "react-router-dom";
import { isAuth } from "../Auth";
import { BiAdjust } from "react-icons/bi";

export class Navbar extends React.Component {

    render() {
        const condition = this.props.darkmode;
        return (
            <div>
                {isAuth() ?
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <img className="img-thumbnail" src="companyLogo.png" 
                                 style={{width:"20%",display:"block",marginLeft:"auto",marginRight:"auto"}}/>
                            <div id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                                <Link to="/login">
                                    <input {...(condition ?
                                        { className: "btn btn-success" } :
                                        { className: "btn btn-outline-success" })}
                                        type="button"
                                        value={this.props.logedin ? "logout" : "login"}
                                        onClick={this.props.loginHandle} />
                                </Link> &nbsp;
                                <button onClick={this.props.darkmodeHandle}
                                    {...(condition ?
                                        { style: { color: "white", fontSize: "30px", borderRadius: "25px", backgroundColor: "black" } } :
                                        { style: { color: "black", fontSize: "30px", borderRadius: "25px" } }
                                    )}>
                                    <BiAdjust />
                                </button>
                            </div>
                        </div>
                    </nav> :
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <img className="img-thumbnail" src="companyLogo.png" 
                                style={{width:"20%",display:"block",marginLeft:"auto",marginRight:"auto"}}/>
                            <div id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                                <button onClick={this.props.darkmodeHandle}
                                    {...(condition ?
                                        { style: { color: "white", fontSize: "30px", borderRadius: "25px", backgroundColor: "black" } } :
                                        { style: { color: "black", fontSize: "30px", borderRadius: "25px" } }
                                    )}>
                                    <BiAdjust />
                                </button>
                            </div>
                        </div>
                    </nav>
                }
            </div>
        );
    }
}