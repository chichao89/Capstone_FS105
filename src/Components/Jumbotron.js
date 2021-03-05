import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import Typical from "react-typical";
import React from "react";
import { Nav } from 'react-bootstrap';
import {NavLink } from 'react-router-dom'

const Jumbotron = () => {
  return (
    <Jumbo fluid className="min-vh-100 parallax">
      <Container >
        <div className="col-lg-12 text-center">
        <h1 className="display-6 text-secondary">Hi, I'm Dee and I'm a home-based manicurist. How can i help? 
        <Typical
        
            
            loop={Infinity}
            wrapper='p'
            steps={[
                ' Apres Extensions?',
                4000,
                ' Acrylic Extensions?',
                4000,
                ' What about PolyGel Extensions?',
                4000,
                ' No? How about good old Gel Manicure?',
                4000,
                ' Wanna talk about it instead?',
                4000
            ]}/>
                </h1>
                <div className="slogan">
        <h4 >Hit me up! I'm sure ill be able to nail your manicure needs.</h4>
        </div>
        </div>
        <div className="d-*-flex flex-*-row justify-content-*-center m-1"> 
        <Nav.Link as={NavLink} to="/Booking"><button className="btn btn-light btn btn-outline-dark">Make Your Booking Now</button></Nav.Link></div>
      </Container>
    </Jumbo>
  );
};

export default Jumbotron;