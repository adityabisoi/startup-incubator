import React from 'react';
import { Navbar,Container,Nav,Form,FormControl,Button } from 'react-bootstrap';
const Headers = () => {
    return (
<Navbar bg="light" variant="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">
    <img
        src='Images/icon_without_bg.png'
        width="100"
        height="80"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search startups"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Nav>
        
        <Nav.Link href="#login" className="btn btn-outline-warning mx-2 my-2 my-lg-0">Login</Nav.Link>
        <Nav.Link href="#signup" className="btn btn-outline-info mx-2 my-2 my-lg-0">Sign Up</Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Headers;