import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Countdown from "./Countdown";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


class Promo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promo: [],
    };
  }

  componentDidMount() {
    axios.get('/PromotionAPI/').then((res) => {
      const promo = res.data;
      this.setState({ promo });
      console.log(promo)
    });
  }

  render() {
    return (
      <div>
        
        <Row>
          <Col>
            <h1 className="text-uppercase">Promos</h1>
          </Col>
        </Row>
        <Row>
         {this.state.promo.map((key) => (
            <div className="col-lg-4" key={key.Promotion_ID}>
              <Countdown futureDate={key.promo_start}></Countdown>
              <Card>
                <div className="effect-image-1">   
                <Card.Img
                   src={key.image}
                   variant="top"
                   alt={key.image}
                   key={key.id}
                  
                ></Card.Img>    
                  
                  </div>
                <Card.Body>
                  <Card.Title className="text-uppercase">
                    {key.promo_type}
                  </Card.Title>
                </Card.Body>
               {/* <Card.Footer> 
                  <span className="">{key.price_currency}</span>
                  {key.price === '0.00' ? (
                    <span>Free</span>
                  ) : (
                    <span>{key.price}</span>
                  )
                 }
                </Card.Footer>*/}
              </Card>
            </div>
                ))} 
               
                
        </Row>
      </div>
    );
  }
}

export default Promo;
