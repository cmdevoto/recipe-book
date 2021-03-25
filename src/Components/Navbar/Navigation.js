import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation() {
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">My Recipe Book</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="Recipe Type" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Breakfast</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Lunch</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Dinner</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Dessert</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">Miscellaneous</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.6">All Recipies</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home">Add Recipe</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    );

}

export default Navigation;