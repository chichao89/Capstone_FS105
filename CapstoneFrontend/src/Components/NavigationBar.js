import React,{useEffect,useState} from "react";
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import {Link, NavLink } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const id = [1,2,3];


const NavigationBar = () => {
 
  let [cartLength, cartState] = useState(0)
  useEffect(() => {
    console.log("cartLength",cartLength)
    const interval = setInterval(() => {
      cartState(JSON.parse(localStorage.getItem('length')))
    }, 1000);
    return () => clearInterval(interval);
  },[cartLength])

  
  const [inShow, setInShow, setShow] = useState(false);
  const [upShow, setUpShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
        <Navbar.Brand as={Link} to="/">inailforfung</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link className="link2" as={NavLink} to="/" exact>Home</Nav.Link>
          <Nav.Link className="link2" as={NavLink} to="/Services">Services</Nav.Link>
          <Nav.Link className="link2" as={NavLink} to="/Booking">Booking</Nav.Link>
          {/*<Nav.Link className="link2" as={NavLink} to={`/Shop/`+id[0]}>Shop</Nav.Link>
          <Nav.Link className="link2" as={NavLink} to="/Locate">Locate Us</Nav.Link>
          <Nav.Link className="link2" as={NavLink} to="/Cart">Cart</Nav.Link>*/}
          {/*<div className="text-white">{cartLength}</div>  */}
        </Nav>
          <div id="signIn"className="nav navbar-nav navbar-right" >
          <>
            <Button variant="primary" className="buttonSearch" onClick={() => setInShow(true)}>
            SIGN IN
            </Button>
            <Button variant="secondary" className="buttonSearch" onClick={() => setUpShow(true)}>
            SIGN UP
            </Button>
            <Modal show={inShow} onHide={() => setInShow(false)}>
              <Modal.Header closeButton>
                <Modal.Title id="signIn">Sign In</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form className="form-group">
                  <label for="username">Username:</label>
                    <input type="text" name="username" className="form-control" id="username"></input>
                    <label for="pwd">Password:</label>
                    <input type="password" name="password" className="form-control" id="password"></input>
                </Form>
              </Modal.Body>
        <Modal.Footer>
          <Button className="buttonSearch" onClick={() => setInShow(false)}>
            Close
          </Button>
          <Button className="buttonSearch" onClick={() => setInShow(false)}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={upShow} onHide={() => setUpShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title id="signUp">Sign up below!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="form-group">
            <label for="username">Username:</label>
            <input type="text" name="username" className="form-control" id="username"></input>
            <label for="pwd">Password:</label>
            <input type="password" name="password" className="form-control" id="password"></input>
            <label for="pwd">Re-Type Password:</label>
            <input type="password" name="password" className="form-control" id="password"></input>
            <label for="email">Email Address:</label>
            <input type="email" name="email" className="form-control" id="email"></input>
            <label for="address">Address:</label>
            <br/>
            <textarea name="address"rows="5" cols="68"></textarea>
            <label for="phone">Contact:</label>
            <br/>
            <input type="tel" id="phone" name="phone" className="form-control" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="buttonSearch" onClick={() => setUpShow(false)}>
            Close
          </Button>
          <Button className="buttonSearch" onClick={() => setUpShow(false)}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>    
          </div>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
    
  );
};

export default NavigationBar;
