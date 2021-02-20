import React, { useState, Component } from "react";
import { Navbar, Nav, Button, Form, Card } from 'react-bootstrap';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Slots_API_URL } from "../api/api";
import { API_URL } from "../api/api";
import CheckOut from "./CheckOut"

class Booking extends Component {
  //constructor() {
  // const [startDate, setStartDate] = useState(new Date());
  // const [value, onChange] = useState('10:00');


  constructor(props) {
    super(props)
    this.state = {
      // used for the form
      selectedDate: new Date(),
      selectedTimeslot: null,
      selectedService: null,

      // used to display
      timeslot: [],
      services: [],
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  handleDateChange(e) {
    console.log(e)
     this.setState({
      selectedDate: e
    })
    // API call to get available times for selected date
     const dateString = e.toISOString().split('T')[0];
     axios.get(Slots_API_URL, {
       headers: {
         Authorization: `JWT ${localStorage.getItem('token')}`,
       },
       params: {
         date: dateString,
       }
     }).then(res => {
       console.log(res.data);
       this.setState({ timeslot: res.data })
     })
  }

  handleSelectTimeslot(timeslot) {
    this.setState({
      selectedTimeslot: timeslot,
    })
  }

  handleSelectService(service) {
    this.setState({
      selectedService: service,
    })
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate)
  }


  continue = e => {
    e.preventDefault();
    this.props.nextStep();
}

  async  componentDidMount() {
    // API call to get all services
     axios.get(API_URL).then((res) => {
      const services = res.data;
      console.log(services);
      this.setState({ services });
    });


    // API call to get available times for selected date
    const dateString = this.state.selectedDate.toISOString().split('T')[0];
    await axios.get(Slots_API_URL, {
      headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`,
      },
      params: {
        date: dateString,
      }
    }).then(res => {
      console.log(res.data);
      this.setState({ timeslot: res.data })
    })
  }

  render() {
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
                  selected={this.state.selectedDate}
                  // onSelect={this.handleDateSelect}
                  onChange={this.handleDateChange}
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
              {this.state.timeslot.map((key) => (
                <div className="col-lg-4 col align-self-center" key={key.slots_ID}>
                  <Button className="buttonSubmit" onClick={() => { this.handleSelectTimeslot(key) }}>
                    {key.time_slot}
                  </Button>
                </div>
              ))}
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
          {this.state.services.map((key) => (
            <div className="col-lg-4" key={key.service_ID}>
              <Card style={{ width: '11rem' }}>
                <div className="img-thumbnail">
                  <Card.Img
                    src={key.image}
                    variant="top"
                    alt="text" size="50%"
                    key={key.id}
                  ></Card.Img>

                </div>
                <Card.Body>
                  <Card.Title className="text-uppercase">
                    {key.service_type}
                  </Card.Title>
                </Card.Body>
                <Card.Footer>
                  <span className="">{key.price_currency}</span>
                  {key.price === '0.00' ? (
                    <span>Free</span>
                  ) : (
                      <span>{key.price}</span>
                    )
                  }
                </Card.Footer>
                <Button className="buttonSubmit" onClick={() => { this.handleSelectService(key) }}>
                  This one!
                </Button>
              </Card>
            </div>
          ))}
        </Row>
        
        {/* {this.state.selectedService != null && this.state.selectedTimeslot ? (
        <CheckOut date ={this.state.selectedDate} service={this.state.selectedService} timeslot={this.state.selectedTimeslot}/>)
        : ( null ) } */}
        <Button onClick={this.continue}>Next</Button>
        {/* <Button onClick={() => {
          alert(JSON.stringify({
            selectedDate: this.state.selectedDate,
            selectedService: this.state.selectedService,
            selectedTimeslot: this.state.selectedTimeslot
          }))
        }}> Check out!</Button> */}
      </div >
    );
  }
}

export default Booking;
