import AuthorizeForm from './AuthorizeForm.js'
import React, { useEffect, useState } from "react";
import {
    getAllUsers,
    getByPassword,
    getByEmail
} from "../../Common/Services/UserLearnService";


const Authorize = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    //token set true when email exists and password matches
    const [token, setToken] = useState(false)
    console.log(email)
    useEffect(() => {
        console.log(email)
        if (email && password){
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
        }
        console.log("end use effect")
    }, [token]);

    const onSubmitHandler = (e) => {
        e.preventDefault();

    };
    const onChangeHandlerEmail = (e) => {
        e.preventDefault();
        console.log("email")
        console.log(e.target.value);
        setEmail(e.target.value)
    };
    const onChangeHandlerPassword = (e) => {
        e.preventDefault();
        console.log("pw")
        console.log(e.target.value);
        setPassword(e.target.value)
    };
    return (
        <div>
            <AuthorizeForm> onChangeHandlerPassword={onChangeHandlerPassword} onChangeHandlerEmail={onChangeHandlerEmail} onSubmitHandler={onSubmitHandler}</AuthorizeForm>
        </div>
    )
};

export default Authorize;
