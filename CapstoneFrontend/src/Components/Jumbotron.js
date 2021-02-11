import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import Typical from 'react-typical'
import React from "react";
import { Nav } from 'react-bootstrap';
import {NavLink } from 'react-router-dom'

const Jumbotron = () => {
  return (
    <Jumbo fluid className="min-vh-100">
      <Container>
        <div className="col-lg-8 text-left">
        {/*<h6 className="text-white text-uppercase">Now you can feel the energy</h6>*/}
        <h1 className="display-2 text-warning">Hi, I'm Dee. How can i help? 
        <Typical
            loop={Infinity}
            wrapper='p'
            steps={[
                ' Apres Extensions?',
                2000,
                ' Acrylic Extensions?',
                4000,
                ' What about PolyGel Extensions?',
                6000,
                ' No? How about good old Gel Manicure?',
                8000,
                ' Wanna talk about it instead?',
                10000
            ]}/>
                </h1>
        <h5 className="text-white">Look me up! I can customise something for your needs.</h5>
        </div>
        <div className="d-*-flex flex-*-row justify-content-*-center m-5"> 
        <Nav.Link as={NavLink} to="/Booking"><button className="btn btn-light btn btn-outline-dark">Make Your Booking Now</button></Nav.Link></div>
        
      </Container>
    </Jumbo>
  );
};

export default Jumbotron;
