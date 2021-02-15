import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
// export const id = [1,2,3];

function NavigationBar(props) {
  //state of logged_in
  const [values, setValues] = useState({
    userName: '',
    password: '',
  });

  const handleUserNameChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      userName: event.target.value,
    }));
  };

  const handlePasswordChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      password: event.target.value,
    }));
  };

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
        <Button
          variant="primary"
          className="buttonSearch"
          onClick={() => setInShow(true)}
        >
          SIGN IN
        </Button>
        <Button
          variant="secondary"
          className="buttonSearch"
          onClick={() => setUpShow(true)}
        >
          SIGN UP
        </Button>
        <Modal show={inShow} onHide={() => setInShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title id="signIn">Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="form-group" onSubmit={props.handle_login}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                name="username"
                className="form-control"
                id="username"
                value={values.userName}
                onChange={handleUserNameChange}
              ></input>
              <label htmlFor="pwd">Password:</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                value={values.password}
                onChange={handlePasswordChange}
              ></input>
              <Modal.Footer>
                <Button
                  className="buttonSearch button2"
                  onClick={() => setInShow(false)}
                >
                  Close
                </Button>
                <input
                  type="submit"
                  className="buttonSearch button2"
                  value="SignIn"
                />
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
        <Modal show={upShow} onHide={() => setUpShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title id="signUp">Sign up below!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                name="username"
                className="form-control"
                id="username"
              ></input>
              <label htmlFor="pwd">Password:</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
              ></input>
              <label htmlFor="pwd">Re-Type Password:</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
              ></input>
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
              ></input>
              <label htmlFor="address">Address:</label>
              <br />
              <textarea name="address" rows="5" cols="68"></textarea>
              <label htmlFor="phone">Contact:</label>
              <br />
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              ></input>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="buttonSearch button2"
              onClick={() => setUpShow(false)}
            >
              Close
            </Button>
            <Button
              className="buttonSearch button2"
              onClick={() => setUpShow(false)}
            >
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );

  const logged_in_nav = (
    <div>
      <Button className="buttonSearch button2" onClick={props.handle_logout}>
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
            <Nav.Link className="link2" as={NavLink} to="/Services">
              Services
            </Nav.Link>
            <Nav.Link className="link2" as={NavLink} to="/Booking">
              Booking
            </Nav.Link>
          </Nav>
          <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default NavigationBar;
NavigationBar.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  handle_logout: PropTypes.func.isRequired,
  handle_login: PropTypes.func.isRequired,
};
