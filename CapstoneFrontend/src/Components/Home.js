import React, {useState,useEffect} from "react";
import Card from "react-bootstrap/Card";
import { Nav } from 'react-bootstrap';
import {NavLink } from 'react-router-dom'
import axios from 'axios'
import { Testimonial_API_URL } from "../api/api";
import Row from "react-bootstrap/Row";


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
    </div>
  );
 
}

export default Home;
