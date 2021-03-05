import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Modal from "react-bootstrap/Modal";



function NavigationBar(props) {
  //state of logged_in
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleUserNameChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      username: event.target.value,
    }));
  };

  const handlePasswordChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      password: event.target.value,
    }));
  };

  //signup event
  const [signUp, setSignUp] = useState({
    username: "",
    password: "",
    repassword: "",
    email: "",
    address: "",
    contact: "",
  });

  const handleSignUpUserNameChange = (event) => {
    event.persist();
    setSignUp((signUp) => ({
      ...signUp,
      username: event.target.value,
    }));
  };

  const handleSignUpPasswordChange = (event) => {
    event.persist();
    setSignUp((signUp) => ({
      ...signUp,
      password: event.target.value,
    }));
  };


  const handleSignUpRePasswordChange = (event) => {
    event.persist();
    setSignUp((signUp) => ({
      ...signUp,
      repassword: event.target.value,
    }));
  };


  const handleSignUpEmailChange = (event) => {
    event.persist();
    setSignUp((signUp) => ({
      ...signUp,
      email: event.target.value,
    }));
  };
  
  const handleSignUpAddressChange = (event) => {
    event.persist();
    setSignUp((signUp) => ({
      ...signUp,
      address: event.target.value,
    }));
  };
  
  const handleSignUpContactChange = (event) => {
    event.persist();
    setSignUp((signUp) => ({
      ...signUp,
      contact: event.target.value,
    }));
  };
  
  const close = (event) => {
    setValues("") 
    setInShow(false)
  }

  const logoutClose = (event) => {
    setValues("")  
    props.handle_logout()
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   alert(`Submitting ${values.userName}`);
  //   alert(`Submitting ${values.password}`);
  // }
  const [inShow, setInShow, setShow] = useState(false);
  const [upShow, setUpShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logged_out_nav = (
    <div id="signIn" className="nav navbar-nav navbar-right">
      <>
        <Button variant="outline-light" className="buttonSearch" onClick={() => setInShow(true)}>
          SIGN IN
        </Button>
        <Button variant="outline-light" className="buttonSearch" onClick={() => setUpShow(true)}>
          SIGN UP
        </Button>
        <Modal show={inShow} onHide={() => setInShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title id="signIn">Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              className="form-group"
              onSubmit={(e) => props.handle_login(e, values)}
            >
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                name="username"
                className="form-control"
                id="username"
                value={values.username}
                onChange={handleUserNameChange}
                required
              ></input>
              <label htmlFor="pwd" class="ms-2 mt-2">
                Password:
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                value={values.password}
                onChange={handlePasswordChange}
                required
              ></input>
              <Modal.Footer>
                <Button variant="outline-light"
                  className="buttonSubmit"
                  onClick={() => close()}
                >
                  Close
                </Button>
                <Button variant="outline-light" className="buttonSubmit" type="submit">
                  SignIn
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
        <Modal show={upShow} onHide={() => setUpShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title id="signUp">Sign up below!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              className="form-group"
              onSubmit={(e) => props.handle_signup(e, signUp)}
            >
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                name="username"
                className="form-control"
                id="username"
                required
                value={signUp.username}
                onChange={handleSignUpUserNameChange}
              ></input>
              <label htmlFor="pwd" class="ms-2 mt-2">
                Password:
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
                required
                value={signUp.password}
                onChange={handleSignUpPasswordChange}
              ></input>
              <label htmlFor="pwd" class="ms-2 mt-2">
                Re-Type Password:
              </label>
              <input
                type="password"
                name="repassword"
                className="form-control"
                id="repassword"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                value={signUp.repassword}
                onChange={handleSignUpRePasswordChange}
              ></input>
              <label htmlFor="email" class="ms-2 mt-2">
                Email Address:
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                value={signUp.email}
                onChange={handleSignUpEmailChange}
                required
              ></input>
              <label htmlFor="address" class="ms-2 mt-2">
                Address:
              </label>
              <input
                type="text"
                name="address"
                className="form-control"
                id="address"
                required
                value={signUp.address}
                onChange={handleSignUpAddressChange}
              ></input>
              <label htmlFor="phone" class="ms-2 mt-2">
                Contact:
              </label>
              <br />
              <input
                type="text"
                id="phone"
                name="phone"
                className="form-control"
                pattern="[8-9]{1}[0-9]{7}"
                title = "Please enter your 8 digit contact number."
                required
                value={signUp.contact}
                onChange={handleSignUpContactChange}
              ></input>
              <Modal.Footer>
                <Button variant="outline-light"
                  className="buttonSubmit"
                  onClick={() => setUpShow(false)}
                >
                  Close
                </Button>
                <Button variant="outline-light" className="buttonSubmit" type="submit">
                  Submit
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );

  const logged_in_nav = (
    <div>
      <span className="text-white">Hello, {props.username}</span>
      <Button variant="outline-light" className="buttonSearch button2" onClick={logoutClose}>
        logout
      </Button>
    </div>
  );

  return (
    <React.Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="sticky-top"
      >
        <Navbar.Brand as={Link} to="/">
          inailforfung
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="link2" as={NavLink} to="/" exact>
              Home
            </Nav.Link>
            <Nav.Link className="link2" as={NavLink} to="/Promo">
              Promotions
            </Nav.Link>
            <Nav.Link className="link2" as={NavLink} to="/Services">
              Services
            </Nav.Link>
            <Nav.Link className="link2" as={NavLink} to="/Booking">
              Booking
            </Nav.Link>
          </Nav>
          <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default NavigationBar;
