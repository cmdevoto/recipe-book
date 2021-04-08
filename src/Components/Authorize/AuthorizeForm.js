import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AuthorizeForm = () => {
    return(
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>Don't have an account? <a href="/register">Register Now</a> </p>
            </Form>
        </div>
    );

};

export default AuthorizeForm;