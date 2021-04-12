import AuthorizeForm from './AuthorizeForm.js'
import React, { useEffect, useState } from "react";
//import ProtectedRoute from "../../Common/Services/ProtectedRoute";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import {
    logInUser
} from "../../Common/Services/UserLearnService";
import Home from "../../Layouts/Home/Home.js";
import { Redirect } from 'react-router';
import Parse from "parse";


const Authorize = () => {
    const path = '/Home';
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    //token set true when email exists and password matches
    const [flag, setFlag] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (email && password && loggedIn){
            logInUser(email, password).then((loggedInUser) => {
                if (loggedInUser){
                    setFlag(true);
                    console.log("logged in: ", flag);
                    alert(
                        `You successfully logged in!`
                    );
                    
                }
                else{
                    setFlag(false);
                    console.log("logged in: ", flag);
                }
                setLoggedIn(false);
            });

        }
    }, [email, password, loggedIn, flag]);

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

    
    console.log('current user: ', Parse.User.current())
    console.log('authenticated user: ', Parse.User.current().authenticated())
    return (
        <div>
        <AuthorizeForm onChangeHandlerEmail={onChangeHandlerEmail} onChangeHandlerPassword={onChangeHandlerPassword} onSubmitHandler={onSubmitHandler} component={Home} flag={flag} path={path} email={email}></AuthorizeForm>
        </div>

    )
};

//<ProtectedRoute 
//flag={flag}>
//</ProtectedRoute>

export default Authorize;
