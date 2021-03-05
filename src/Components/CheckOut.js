import React, { Component } from "react";
import { Button, Row, Col, Form, ListGroup,Alert } from "react-bootstrap";
import axios from "axios";
// React Notification
import { NotificationManager } from 'react-notifications';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

class CheckOut extends Component {
  constructor(props){
    super(props)
    this.state ={
      submit : false,
      show : true
    };
  }

  setShow = (e) => {
    this.setState({show:e})
  }

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('this state', this.props);

    const date = new Date(this.props.selectedDate.getTime() - (this.props.selectedDate.getTimezoneOffset() * 60000 )).toISOString().split("T")[0];
    const data  = {
        user_id: this.props.id,
        service: this.props.selectedService['service_ID'],
        price: this.props.selectedService['discount_price'],
        date: date,
        time: this.props.selectedTimeslot['slots_ID']
    }

    const options = {
      headers: {
          'Content-Type': 'application/json',
      }
    };
    
    // console.log(token);
    axios.post('booking/Booking/', data, options)
    .then(res => {
      // alert('Booking is Successful, See you on that Day!', res.data);
      this.setState({submit:true});
      NotificationManager.success('Successful!','Booking Confirmation Email', 8000);
    }).catch(err => console.log(err))
      
  }

  render() {
    const {
      selectedDate,
      selectedTimeslot,
      selectedService,
      logged_in,
    } = this.props;
    const dateString = new Date(selectedDate.getTime() - (selectedDate.getTimezoneOffset() * 60000 ))
    .toISOString()
    .split("T")[0];
 
    let price = 0
    if(selectedService['discount_price'] === null){
      selectedService['discount_price'] = "0.00"
      price = selectedService['discount_price']
    }
    else{
      price = selectedService['discount_price']
    }
    const name = this.props.name
    const email = this.props.email
    const contact= this.props.contact
    const slot = selectedTimeslot['time_slot']
    const service_type = selectedService['service_type']
    const price_currency = selectedService['price_currency']
    const service_duration = selectedService['duration']
    console.log(selectedService,"selected!")
    return (
     <>
      {logged_in === false ? (
        <div className="allButFooter">
        <h1>Please Log in/or Sign Up to be able to use our Booking Service</h1>
        </div>
      ) : (
        <Form>
        <div className="form-container p-3 mb-2 bg-white text-dark">
          <h5 className="mb-5">Here is the Booking Details you have selected:</h5>
           <Row>
            <Col className="mx-auto">
              <ListGroup variant="flush">
                <ListGroup.Item variant="info"><span className="checkout-form">UserName:</span> <p className="checkout-data">{name}</p></ListGroup.Item>
                <ListGroup.Item variant="info"><span className="checkout-form">Email:</span>    <p className="checkout-data">{email}</p></ListGroup.Item>
                <ListGroup.Item variant="info"><span className="checkout-form">Phone Number:</span> <p className="checkout-data">{contact}</p></ListGroup.Item>
                <ListGroup.Item variant="info"><span className="checkout-form">Booking Date:</span> <p className="checkout-data">{dateString}</p></ListGroup.Item>
                <ListGroup.Item variant="info"><span className="checkout-form">TimeSlot:</span> <p className="checkout-data">{slot}</p></ListGroup.Item>
                <ListGroup.Item variant="info"><span className="checkout-form">Service Required:</span> <p className="checkout-data">{service_type}</p></ListGroup.Item>
                <ListGroup.Item variant="info"><span className="checkout-form">Duration:</span> <p className="checkout-data">{service_duration}</p></ListGroup.Item>
                <ListGroup.Item variant="info"><span className="checkout-form">Price:</span> <p className="checkout-data">{price_currency}{price}</p></ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row className="m-5">
            <Col>
              <Button className="m-2" disabled={this.state.submit} onClick={this.back}>Back</Button>
              <Button className="m-2" disabled={this.state.submit} onClick={this.handleSubmit}>Submit</Button>
            </Col>
          </Row> 
  
        </div>
        </Form>
      )}
     </>
      
    );
  }
}

export default CheckOut;
