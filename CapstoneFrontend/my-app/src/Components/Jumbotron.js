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
        <h6 className="text-white text-uppercase">Now you can feel the energy</h6>
        <h1 className="display-2 text-warning">Start your day with
        <Typical
            loop={Infinity}
            wrapper='span'
            steps={[
                ' a black Coffee',
                1000,
                ' a Cappucino',
                2000,
                ' an Expresso',
                3000,
                ' an iced Mocha',
                4000,
                ' an Americano',
                5000
            ]}/>
                </h1>
        <h5 className="text-white">Connecting to the local community</h5>
        </div>
        <div className="d-*-flex flex-*-row justify-content-*-center m-5"> 
        <Nav.Link as={NavLink} to="/Story"><button className="btn btn-light btn btn-outline-dark">Learn Our Story</button></Nav.Link></div>
        
      </Container>
    </Jumbo>
  );
};

export default Jumbotron;
