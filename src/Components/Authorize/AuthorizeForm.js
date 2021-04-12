import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";


const AuthorizeForm = ({onChangeHandlerEmail, onChangeHandlerPassword, onSubmitHandler, component,flag, path, email, ...rest}) => {
    return(
        <div>
            <Form onSubmit={onSubmitHandler}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"onChange={onChangeHandlerEmail} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"onChange={onChangeHandlerPassword} />
                </Form.Group>
                <Button variant="primary" type="submit" onSubmit={onSubmitHandler}>
                    Submit
                </Button>
                <p>Don't have an account? <a href="/register">Register Now</a> </p>
                <ProtectedRoute>flag={flag} component={component} path={path} </ProtectedRoute>
            </Form>
        </div>

    );

};
/*
Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };*/
export default AuthorizeForm;