import React from "react";
import { BrowserRouter as Router,Route,Link, Redirect } from "react-router-dom";

import Layout from "./component/Layout";

class App extends React.Component {
  
  render(){
    return (          
        <Layout/>             
    );
  }
}

export default App;
