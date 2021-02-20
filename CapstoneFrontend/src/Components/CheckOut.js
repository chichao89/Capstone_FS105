import React, { Component } from "react";
import {Button } from 'react-bootstrap';
class CheckOut extends Component {
  constructor(props) {
    super(props);
  }

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    // service : [this.props.service],
    // const dateString = this.props.date.toISOString().split('T')[0];
    // const service = this.state.service
    return (
      <div>
        <h1>hello</h1>
        {/* {dateString} */}
        {/* {service.map((key=> (
                    <div>{key.service_ID}</div>               
                    )))} */}
        <Button onClick={this.back}>
          « Back
        </Button>
        <Button onClick={this.continue}>
          Next »
        </Button>
      </div>
    );
  }
}

export default CheckOut;
