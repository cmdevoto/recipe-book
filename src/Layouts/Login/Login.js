import React from "react";
import Authorize from '../../Components/Authorize/Authorize.js';

const Login = () => {

    const headerStyle = {
        fontWeight:"bold",
        padding:"30px"
    }
    return(
        <div>
            <header style={headerStyle}>Log-In to Your Recipe Book Account!</header>
            <Authorize></Authorize>
        </div>
    );

};

export default Login;