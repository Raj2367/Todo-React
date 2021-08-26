import React from "react";
import { Link } from "react-router-dom";
import { isAuth } from "../Auth";
import { BiAdjust } from "react-icons/bi";

import '../css/Navbar.css';

export const Navbar = (props) => {
    const condition = props.darkmode;
    return (
        <div>
            {isAuth() ?               
                    <div>
                        <img className="img-thumbnail" src="companyLogo.png" />
                        <div className="button">    
                            <button id="button1" onClick={props.darkmodeHandle}
                                {...(condition ?
                                    { style: { color: "white", borderRadius: "25px", backgroundColor: "black" } } :
                                    { style: { color: "black", borderRadius: "25px" } }
                                )}>
                                <BiAdjust />
                            </button> &nbsp;
                        </div>
                            <Link to="/login">
                                <input className="button" 
                                    {...(condition ?
                                        { className: "btn btn-success" } :
                                        { className: "btn btn-outline-success" })}
                                    type="button"
                                    value={props.logedin ? "logout" : "login"}
                                    onClick={props.loginHandle} />
                            </Link>                                                   
                    </div>:                
                    <div>                        
                        <img className="img-thumbnail" src="companyLogo.png" />                        
                        <div className="button">                            
                            <button id="button1" onClick={props.darkmodeHandle}
                                {...(condition ?
                                    { style: { color: "white", borderRadius: "25px", backgroundColor: "black" } } :
                                    { style: { color: "black", borderRadius: "25px" } }
                                )}>
                                <BiAdjust />
                            </button>
                        </div>
                    </div>
            }
        </div>
    );
}

//width:"20%",display:"block",marginLeft:"auto",marginRight:"auto"