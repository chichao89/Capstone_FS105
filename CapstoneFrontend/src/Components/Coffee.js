import React, { Component } from "react";
import Jumbotron  from "./Jumbotron";
import Product from "../Data/Product.json";
import Home from "./Home";
import Shop from "./Shop";


class Coffee extends Component {
  constructor(props) {
    let url = props.location.pathname;
    const urlpath = parseInt((url.match(/(\d+)/g)));
    super(props);
    this.state = {
      coffeeProduct: Product,
      myUrl: urlpath,
      Shop: 1,
      switchButton: true,
    };
  }

  render() {
    switch (this.state.switchButton) {
      case this.state.Shop === this.state.myUrl: {
        return (
          <>
            <Shop product={this.state.coffeeProduct} />
          </>
        );
      }
      default:
        return ( 
                <>
                <Jumbotron/>
                <div className="container">
                <Home product={this.state.coffeeProduct} />
                </div>
                </>
                )
    }
  }
}

export default Coffee;
