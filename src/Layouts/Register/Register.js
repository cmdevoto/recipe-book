import React from "react";
import NewAccount from '../../Components/NewAccount/NewAccount.js';

const Register = () => {

    const headerStyle = {
        fontWeight:"bold",
        padding:"30px"
    }
    return(
        <div>
            <header style={headerStyle}>Register for Your Recipe Book Account!</header>
            <NewAccount></NewAccount>
        </div>
    );

};

export default Register;