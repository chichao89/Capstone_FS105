import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      discountedPrice: [],
    };
  }

  componentDidMount() {
    axios.get("api/ServiceNailAPI/").then((res) => {
      const services = res.data;
      this.setState({ services });
    });
    axios.get("api/PromotionAPI/").then((res) => {
      const discountedPrice = res.data;
      this.setState({ discountedPrice });
      console.log(discountedPrice);
    });
  }

  render() {
    const discount = this.state.discountedPrice.map((dct) => dct.discount_amt);
    const discountActive = this.state.discountedPrice.map((act) => act.active);

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
                <div className="effect-image-1">
                  <Card.Img
                    src={key.image}
                    variant="top"
                    alt={key.image}
                    key={key.id}
                  ></Card.Img>
                  <div className="overlay-sim-text-2 overlay-xs-1">
                    <p>{key.service_description}</p>
                  </div>
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
                  {/*<span  className="">{key.price_currency}</span>*/}

                  {discountActive[0] === true ? (
                    key.price === "0.00" ? (
                      <span>Free</span>
                    ) : (
                      <>
                        <span style={{ textDecorationLine: "line-through" }}>
                          {key.price_currency} {key.price}
                        </span>
                        <span>
                          {key.price_currency}{" "}
                          {(((100 - discount) / 100) * key.price).toFixed(2)}
                        </span>
                      </>
                    )
                  ) : (
                    <span>
                      {key.price_currency} {key.price}
                    </span>
                  )}
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
