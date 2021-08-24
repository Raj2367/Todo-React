/**
 * home component
 */
import React from "react";
import { Link } from "react-router-dom";
import { isAuth } from "../Auth";
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    
    login=(e)=>{
        e.preventDefault();        
        console.log(this.state);
    }

    handleInputChange = (e) => {              
        this.setState({
          [e.target.name]: e.target.value
        })
      };
    render() {
        if(isAuth()) {
            alert("you are already logedin");            
        }
        
        return (            
            <div className="container">
                <form onSubmit={this.login}>   
                    <br/>
                    <div className="form-group">
                        <h4><label htmlFor="username">User Name</label></h4>
                        <input type="text" className="form-control" name="username" placeholder="Enter name" onChange={this.handleInputChange} />                        
                    </div>                    
                    <div className="form-group">
                        <h4><label htmlFor="password">Password</label></h4>
                        <input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={this.handleInputChange}/>
                    </div>
                    <br/>
                    <Link to="/login"><button type="submit" className="btn btn-primary" onClick={this.props.loginHandle}>Login</button></Link>
                </form>
            </div>
        );
    }
}

export default Home;
