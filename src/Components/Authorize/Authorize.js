import AuthorizeForm from './AuthorizeForm.js'
import React, { useEffect, useState } from "react";
import ProtectedRoute from 'react-protected-route-component'
import {
    getAllUsers,
    getByPassword,
    getByEmail,
    logInUser
} from "../../Common/Services/UserLearnService";
import Home from "../../Layouts/Home/Home.js";


const Authorize = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    //token set true when email exists and password matches
    const [token, setToken] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (email && password && loggedIn){
            logInUser(email, password).then((loggedInUser) => {
                console.log("checking logged in")
                if (loggedInUser){
                    alert(
                        `${loggedInUser}, you successfully logged in!`
                    );
                    setToken(true)
                }
                else{
                    console.log("failed to log in");
                    setToken(false);
                }
                setLoggedIn(false);
            });
            /*
            getByEmail(email).then((gotEmail) => {
                console.log("called after the end of the main stack. the value received/returned is: " + gotEmail);
                return gotEmail;
            });

            getByEmail(email).then((emailCheck) => {
                if (emailCheck){
                    console.log(emailCheck)
                }
            setToken(true);
            });
            */
        }
        console.log("end use effect")
    }, [email, password, loggedIn, token]);

    const onSubmitHandler = (e) => {
        console.log("handled")
        e.preventDefault();
        setLoggedIn(true);
    };

    const onChangeHandlerEmail = (e) => {
        e.preventDefault();
        console.log("email");
        console.log(e.target.value);
        setEmail(e.target.value);
    };

    const onChangeHandlerPassword = (e) => {
        e.preventDefault();
        console.log("pw");
        console.log(e.target.value);
        setPassword(e.target.value);
    };
    return (
        <div>
            <AuthorizeForm onChangeHandlerEmail={onChangeHandlerEmail} onChangeHandlerPassword={onChangeHandlerPassword} onSubmitHandler={onSubmitHandler}></AuthorizeForm>
        </div>
    )
};

export default Authorize;
