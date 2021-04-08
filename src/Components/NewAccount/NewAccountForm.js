import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const NewAccountForm = ({ user, onChange, onSubmit }) => {
    console.log(user);
    return(
        <div>
            <Form onSubmit={onSubmit}>
                <div>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" value={user.email} name="email" onChange={onChange} placeholder="Enter Email" />
                </Form.Group>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" value={user.username} name="username" onChange={onChange} placeholder="Enter Username" />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={user.password} name="password" onChange={onChange} placeholder="Password" />
                </Form.Group>
                </div>
                <Button variant="primary" type="submit" onSubmit={onSubmit}>
                    Create Acount
                </Button>
                <p><a href="/login">Go back to log-in page</a> </p>
            </Form>
        </div>
    );

};

export default NewAccountForm;