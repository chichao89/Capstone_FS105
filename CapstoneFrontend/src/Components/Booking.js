import React, { useState, Component } from "react";
import { Navbar, Nav, Button, Form, Card } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Slots_API_URL } from "../api/api";
import { API_URL, Promo_API_URL } from "../api/api";
import CheckOut from "./CheckOut";

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      discountedPrice: [],
    };
    
    //this.state = {
    // used for the form
    // selectedDate: new Date(),
    // selectedTimeslot: null,
    // selectedService: null,

    // used to display
    // timeslot: [],
    // services: [],
    //};
    // this.handleDateChange = this.handleDateChange.bind(this);
    // this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // handleDateChange(e) {
  //   console.log(e)
  //    this.setState({
  //     selectedDate: e
  //   })
  //   // API call to get available times for selected date
  //    const dateString = e.toISOString().split('T')[0];
  //    axios.get(Slots_API_URL, {
  //      headers: {
  //        Authorization: `JWT ${localStorage.getItem('token')}`,
  //      },
  //      params: {
  //        date: dateString,
  //      }
  //    }).then(res => {
  //      console.log(res.data);
  //      this.setState({ timeslot: res.data })
  //    })
  // }

  // handleSelectTimeslot(timeslot) {
  //   this.setState({
  //     selectedTimeslot: timeslot,
  //   })
  // }

  // handleSelectService(service) {
  //   this.setState({
  //     selectedService: service,
  //   })
  // }

  // onFormSubmit(e) {
  //   e.preventDefault();
  //   console.log(this.state.startDate)
  // }
  
  
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
    
  };
  componentDidMount() {
    axios.get(API_URL).then((res) => {
      const services = res.data;
      this.setState({ services });
    });
    axios.get(Promo_API_URL).then((res) => {
      const discountedPrice = res.data;
      this.setState({ discountedPrice });
      console.log(discountedPrice)
  });
}
  

  render() {
    const {
      selectedDate,
      handleDateChange,
      selectedTimeslot,
      selectedService,
      handleSelectTimeslot,
      handleSelectService,
      timeslot,
      services,
    } = this.props;
    const discount = this.state.discountedPrice.map((dct) => (
      dct=dct.discount_amt
    ))
    console.log(discount)
    const discountActive = this.state.discountedPrice.map((act) => (
      act = act.active
    ))
    console.log(discountActive)
    return (
      <div>
        <Row>
          <Col>
            <h1 className="text-uppercase">Booking</h1>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <div className="d-flex flex-column">
              <h3 className="text-uppercase">Select Date</h3>

              <div>
                <DatePicker
                  selected={selectedDate}
                  // onSelect={this.handleDateSelect}
                  onChange={handleDateChange}
                  inline
                  name="selectedDate"
                  dateFormat="dd/MM/yyyy"
                />
              </div>
            </div>
          </Col>
          <Col sm>
            <div className="d-flex flex-column ">
              <h3 className="text-uppercase">Select Time</h3>
              {timeslot.map((key) => {
                let disabled = false;

                if (
                  selectedTimeslot &&
                  key.slots_ID === selectedTimeslot.slots_ID
                ) {
                  disabled = true;
                }

                return (
                  <div
                    className="col-lg-4 col align-self-center"
                    key={key.slots_ID}
                  >
                    <Button
                      disabled={disabled}
                      className="buttonSubmit"
                      onClick={() => {
                        handleSelectTimeslot(key);
                      }}
                    >
                      {key.time_slot}
                    </Button>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex justify-content-center">
              <h3 className="text-uppercase">Select Service</h3>
            </div>
          </Col>
        </Row>
        <Row>
          {services.map((key) => {
            let disabled = false;

            if (
              selectedService &&
              key.service_ID === selectedService.service_ID
            ) {
              disabled = true;
            }
            
            

            return (
              <div className="col-lg-4" key={key.service_ID}>
                <Card style={{ width: "14rem" }}>
                  <div className="img-thumbnail">
                    <Card.Img
                      src={key.image}
                      variant="top"
                      alt="text"
                      size="50%"
                      key={key.id}
                    ></Card.Img>
                  </div>
                  <Card.Body>
                    <Card.Title className="text-uppercase">
                      {key.service_type}
                    </Card.Title>
                  </Card.Body>
                  <Card.Footer>
                  {discountActive[0] === true? 
              (<span style={{textDecorationLine: 'line-through'}}>{key.price_currency} {key.price}</span>) :
              (
               <span >{key.price_currency} {key.price}</span>
             ) }
            

            {/*<span  className="">{key.price_currency}</span>*/}
            {discountActive[0] === true? (<span>{key.price_currency} {(((100-discount)/100)* (key.price)).toFixed(2)}</span>):null}

             {discountActive[0] === false? 
              (<span >{key.price_currency} {key.price}</span>) :
              null }

             
                  </Card.Footer>
                  <Button
                    disabled={disabled}
                    className="buttonSubmit"
                    onClick={() => {
                      handleSelectService(key);
                    }}
                  >
                    This one!
                  </Button>
                </Card>
              </div>
            );
          })}
        </Row>
        
        
        {selectedService === null || selectedTimeslot === null || timeslot.length === 0 ? (
        <Button disabled onClick={this.continue}>Next</Button>) : (<Button onClick={this.continue}>Next</Button> )}
        
        {/* <Button
          onClick={() => {
            alert(
              JSON.stringify({
                selectedDate: this.props.selectedDate,
                selectedService: this.props.selectedService,
                selectedTimeslot: this.props.selectedTimeslot,
                timeslot: this.props.timeslot
              })
            );
          }}
        >
          {" "}
          Check out!
        </Button> */}
      </div>
    );
  }
}

export default Booking;
