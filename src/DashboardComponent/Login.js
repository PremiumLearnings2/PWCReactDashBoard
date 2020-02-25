import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel , Card, Navbar, Form } from "react-bootstrap";
import "./Login.css";
import {Redirect} from 'react-router-dom'
import { render } from "@testing-library/react";


export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [loggedIn, setloggedIn] = useState(false)

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      if(email === "ajinkyakale@com" && password === 1234567){
        setloggedIn(true);
      }
    }

    setValidated(true);
  }
  // render(){
  //   if(loggedIn){
  //     return ( <Redirect to="/admin"/> )
  //   }
  // }
  

  return (
    <div className="LoginPage-Wrapper">
    <Navbar className="NavbarOut"  bg="danger">
        <Navbar.Brand  bsPrefix="navBarStyle">BUTTERFLY</Navbar.Brand>
    </Navbar>
    <div className="CardStyle">
    <Card className="InnerCardStyle">
          <Card.Body>
          <Card.Title className="CardTitle">Login</Card.Title>
            <Card.Text>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                  <FormLabel>Email</FormLabel>
                  <FormControl
                    autoFocus
                    required
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">Enter Valid Username</Form.Control.Feedback>
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                  <FormLabel>Password</FormLabel>
                  <FormControl
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                  />
                  <Form.Control.Feedback type="invalid">Enter Valid Password</Form.Control.Feedback>
                </FormGroup>
                <div className="button">
                <Button  size="sm" variant="danger" type="submit">
                  Login
                </Button>
                </div>
              </Form>
            </Card.Text>
          </Card.Body>
      </Card>
      </div>
      </div>
   
  );
}