import React, { useState, Component } from "react";
import { Navbar, Nav, Button, Form, Card } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Slots_API_URL } from "../api/api";
import { API_URL } from "../api/api";
import CheckOut from "./CheckOut";

class Booking extends Component {

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

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
                  minDate={new Date()}
                />
              </div>
            </div>
          </Col>
          <Col sm>
            <div className="d-flex flex-column ">
              <h3 className="text-uppercase">Select Time</h3>
              {timeslot.map((key) => {
                if (key.is_booked === true)
                {
                  return(
                    <div
                      className="col-lg-4 col align-self-center"
                    >
                    <Button
                    variant="secondary"
                    disabled
                    className="buttonDisabled but"
                  >{key.time_slot}</Button>
                  </div>)
                }
                else
                {
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
                }
              
              })}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
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
                <Card>
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
                    <Card.Title className="text-uppercase">
                    {key.duration}
                  </Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <span className="">{key.price_currency}</span>
                    {key.price === "0.00" ? (
                      <span>Free</span>
                    ) : (
                      <span>{key.price}</span>
                    )}
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
      </div>
    );
  }
}

export default Booking;
