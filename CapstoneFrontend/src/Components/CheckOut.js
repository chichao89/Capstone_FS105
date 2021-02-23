import React, { Component } from "react";
import { Button, Row, Col, Form, ListGroup } from "react-bootstrap";
import axios from "axios";
import { Booking_API_URL } from "../api/api";


class CheckOut extends Component {

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
        price: this.props.selectedService['price'],
        date: date,
        time: this.props.selectedTimeslot['slots_ID']
    }

    const options = {
      headers: {
          'Content-Type': 'application/json',
      }
    };
    
    // console.log(token);
    axios.post(Booking_API_URL, data, options)
    .then(res => {
      alert('success', res.data);
    }).catch(err => console.log(err))
      
  }
//     axios.post(url, {data})
//         .then(res => {
//             console.log('success', res.data);
//         })
//         .catch(err => console.log(err))
// };


  render() {
    const {
      selectedDate,
      selectedTimeslot,
      selectedService,
      timeslot,
      services,
      id,
    } = this.props;
    const dateString = new Date(selectedDate.getTime() - (selectedDate.getTimezoneOffset() * 60000 ))
    .toISOString()
    .split("T")[0];
    const name = this.props.name
    const email = this.props.email
    const contact= this.props.contact
    const selectedServiceID = selectedService['service_ID']
    const slotID = selectedTimeslot['slots_ID']
    const selectedPrice = selectedService['price']
    return (
      <Form>
      <div className="form-container p-3 mb-2 bg-white text-dark">
        <h4 className="mb-5">Here is the Booking Details you have selected:</h4>
        <Row>
          <Col className="col-sm-3 my-auto">
            <ListGroup variant="flush">
              <ListGroup.Item>UserName:</ListGroup.Item>
              <ListGroup.Item>Email:</ListGroup.Item>
              <ListGroup.Item>Phone Number:</ListGroup.Item>
              <ListGroup.Item>Booking Date:</ListGroup.Item>
              <ListGroup.Item>TimeSlot:</ListGroup.Item>
              <ListGroup.Item>Service Required:</ListGroup.Item>
              <ListGroup.Item>Price:</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <ListGroup variant="flush">
              <ListGroup.Item variant="info">{name}</ListGroup.Item>
              <ListGroup.Item variant="info">{email}</ListGroup.Item>
              <ListGroup.Item variant="info">{contact}</ListGroup.Item>
              <ListGroup.Item variant="info">{dateString}</ListGroup.Item>
              {timeslot
                .filter((key) => key.slots_ID === selectedTimeslot.slots_ID)
                .map((filteredslot) => (
                  <ListGroup.Item variant="info" key={filteredslot.slots_ID}>
                    {filteredslot.time_slot}
                  </ListGroup.Item>
                ))}
              {services
                .filter((key) => key.service_ID === selectedService.service_ID)
                .map((filteredservice) => (
                  <>
                  <ListGroup.Item
                    variant="info"
                    key={filteredservice.service_ID}
                  >
                    {filteredservice.service_type}
                  </ListGroup.Item>
                  <ListGroup.Item
                     variant="info"
                   >
                      <span>{filteredservice.price_currency}</span>{filteredservice.price}
                   </ListGroup.Item>
                  </>
                ))}
            </ListGroup>
          </Col>
        </Row>
        <Row className="m-5">
          <Col>
            <Button className="m-2" onClick={this.back}>Back</Button>
            <Button className="m-2" onClick={this.handleSubmit}>Submit</Button>
          </Col>
        </Row>



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
        </Button> */
        
                          //  alert(
                  //   JSON.stringify({
                  //     id,
                  //     selectedServiceID,
                  //     selectedPrice,
                  //     dateString,
                  //     slotID
                  //   })
                  // );
        
        
        
        }
      </div>
      </Form>
    );
  }
}

export default CheckOut;
