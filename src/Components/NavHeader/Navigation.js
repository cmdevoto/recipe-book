import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
//import Form from "react-bootstrap/Form";
//import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
    loggedOut
} from "../../Common/Services/UserLearnService";

/*
const testLogout = () =>{
    
    Parse.User.logOut().then(function(){
        console.log(Parse.User.current());
      }, function(error){
        console.log(error);
      });
}
*/

function Navigation() {

    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/Home">My Recipe Book</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="navbar">
                <Nav.Link href="/Home">Home</Nav.Link>
                <NavDropdown title="Recipe Type" id="basic-nav-dropdown">
                    <NavDropdown.Item href="Breakfast" >Breakfast</NavDropdown.Item>
                    <NavDropdown.Item href="Lunch">Lunch</NavDropdown.Item>
                    <NavDropdown.Item href="Dinner">Dinner</NavDropdown.Item>
                    <NavDropdown.Item href="Dessert">Dessert</NavDropdown.Item>
                    <NavDropdown.Item href="Miscellaneous">Miscellaneous</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="AllRecipes">All Recipies</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/add">Add Recipe</Nav.Link>
                <Button variant="primary" type="submit" href="login" onClick={loggedOut}>
                    logOut
                </Button>
            </Nav>
        </Navbar>
    );

}

export default Navigation;

/* Search bar for later 
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
*/