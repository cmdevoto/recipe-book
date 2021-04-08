import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const NewAccountForm = () => {

    return(
        <div>
            <Form>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group controlId="formName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Full Name" />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create Acount
                </Button>
                <p><a href="/login">Go back to log-in page</a> </p>
            </Form>
        </div>
    );

};

export default NewAccountForm;