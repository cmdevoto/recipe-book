import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Parse from "parse";
//import Form from "react-bootstrap/Form";
//import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
    removeUser,
    loggedOut,
    deleteTest,
    resetPassword,
    removeUser2
} from "../../Common/Services/UserLearnService";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getSessionToken = async () => {
    const sessionToken = await AsyncStorage.getItem('sessionToken');
    console.log(sessionToken)
    var sessionToken2 = Parse.User.current()._sessionToken;
    console.log(sessionToken2)
    return sessionToken;
  };

function Navigation() {
    //console.log(Parse.User.current.getUsername()); 
    var user = Parse.User.current();
    var name= user.get("username");
    var email = user.get("email")
    console.log(name)
    console.log(email)
    console.log("NAV file check", user.get("profile"));
    
   
      const onClickHandlerDelete = (e) => {
        e.preventDefault();
        console.log("handled delete");
        const user_save = Parse.User.current()
        removeUser(user_save)
        localStorage.clear();
        loggedOut()
        localStorage.clear();
      };
    return(
        <Navbar bg="dark"   variant="dark" >
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
                <Nav.Link href="/settings" className="ml-auto">Settings</Nav.Link>

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