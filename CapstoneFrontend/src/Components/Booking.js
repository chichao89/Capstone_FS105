import React, { useState, Component } from "react";
import { Navbar, Nav, Button, Form, Card } from 'react-bootstrap';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker"
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Slots_API_URL } from "../api/api";
import { API_URL } from "../api/api";

class Booking extends Component {
  //constructor() {
    //const [startDate, setStartDate] = useState(new Date());
    //const [value, onChange] = useState('10:00');

    constructor(props) {
      super(props)
      this.state = {
        timeslot: [],
        services: [],
      };
    }

    componentDidMount() {
      axios.get(Slots_API_URL).then((res) => {
        const timeslot = res.data;
        this.setState({ timeslot });
      });
      axios.get(API_URL).then((res) => {
        const services = res.data;
        this.setState({services });
      });
    }

    /*componentDidMount() {
      axios.get(API_URL).then((res) => {
        const services = res.data;
        this.setState({ services });
      });
    }*/

    

    render(){
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
                {/*<DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  fixedHeight
                inline />*/}
              </div>
            </div>
          </Col>
          <Col sm>
          
            <div className="d-flex flex-column ">
              <h3 className="text-uppercase">Select Time</h3>
              {this.state.timeslot.map((key) => (
              <div className="col-lg-4 col align-self-center" key={key.slots_ID}>
                {/*<TimePicker
                  onChange={onChange}
                value={value} />*/}
                <Button className="buttonSubmit">
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
              <Card style={{ width: '10rem' }}>
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
                <Button className="buttonSubmit">
                  This one!
                </Button>
              </Card>
            </div>
          ))}
        </Row>
      </div>
    );
  }
}

export default Booking;
