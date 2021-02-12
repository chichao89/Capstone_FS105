import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CoffeeDetails from "./CoffeeDetails";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { API_URL } from "../api/api";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
    };
  }

  componentDidMount() {
    axios.get(API_URL).then((res) => {
      const services = res.data;
      this.setState({ services });
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <h1 className="text-uppercase">Services</h1>
          </Col>
        </Row>
        <Row>
          {this.state.services.map((key) => (
            <div className="col-lg-4" key={key.service_ID}>
              <Card>
                <div className="box-container">   
                <Card.Img
                  className="image"
                  src={key.image}
                  variant="top"
                  alt={key.image}
                  key={key.id}
                ></Card.Img>    
                <div className="middle"><div className="text"><Card.Text>{key.service_description}</Card.Text></div></div>
                </div> 
                <Card.Body>
                  <Card.Title className="text-uppercase">
                    {key.service_type}
                  </Card.Title>
                </Card.Body>
                <Card.Footer> 
                  {key.price_currency}      
                  {key.price}
                </Card.Footer>
              </Card>
            </div>
          ))}
        </Row>
      </div>
    );
  }
}

export default Services;
