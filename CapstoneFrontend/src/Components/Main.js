import React, { Component } from "react";
import Jumbotron  from "./Jumbotron";
import Home from "./Home";



class Main extends Component {
  render() {

        return ( 
                <>
                <Jumbotron/>
                <div className="container">
                <Home  />
                </div>
                </>
                )
    }
  }

export default Main;
