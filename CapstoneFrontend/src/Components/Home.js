import React, {useState,useEffect} from "react";
import Card from "react-bootstrap/Card";
//import CardDeck from "react-bootstrap/CardDeck";
import { Nav } from 'react-bootstrap';
import {NavLink } from 'react-router-dom'
// import {id} from './NavigationBar'
//import CoffeeDetails from './CoffeeDetails'
import axios from 'axios'
import { Testimonial_API_URL } from "../api/api";
import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";

function Home(props) {
  const [testimonial, setData] = useState([]);

  useEffect(() => {
    axios.get(Testimonial_API_URL).then((res) => {
      const testimonial = res.data;
      setData(testimonial);
    });
  }, []);
 
  const shuffleArray = () =>{
     let length  = testimonial.length - 1;
     for(; length > 0; length--){
       const finalArray = Math.floor(Math.random()*(length+1));
       const temp = testimonial[length];
       testimonial[length] = testimonial[finalArray];
       testimonial[finalArray] = temp;
     }
     return testimonial;
   }

  //declare a new state variable isToggleon
  // const [isToggleOn, handleClick] = useState(false);
  // const [myKey, handleKey] = useState();

 
  // if (isToggleOn) {
  //   return (
  //     <div>
  //       <button className="rounded-circle float-right" onClick={()=>handleClick(!isToggleOn)}>X</button>
  //       <CoffeeDetails
  //         warn={isToggleOn && myKey}
  //         product={props.product}
  //       />
  //     </div>
  //   );
  // }
  // else{
  return (
    <div className="parallax2">
      <h1 className="text-uppercase">Testimonial</h1>
      <Nav.Link as={NavLink} to="/Services/">
        <button className="btn btn-dark btn btn-outline-light">
          Check Our Services Out!
        </button>
      </Nav.Link>
      <Row>
        
        {shuffleArray(testimonial).slice(0,3).map((testimonialkey) => (
          <div className="col-lg-4" key={testimonial.testimonial_ID}>
          <Card >
            <Card.Img
              variant="top"
              src={testimonialkey.image}
              key={testimonialkey.testimonial_ID}
            />
          </Card>
          </div>
        ))}
      </Row>

      {/* <CardDeck>
      {shuffleArray(props.product).slice(0,3).map((key) => (
          <Card className="col-lg-4" key={key.id}>
            <Card.Img  variant="top" src={key.img} onClick={() => {handleKey(key.id);handleClick(!isToggleOn)}}
                        key={key.id} />
            <Card.Body>
              <Card.Title className="text-uppercase">{key.title}</Card.Title>
              <Card.Text>{key.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{key.price[0].toFixed(2)}</small>
            </Card.Footer>
          </Card>
      ))}
    </CardDeck> */}
    </div>
  );
 
}

export default Home;
