import React from "react";
import UserInfo from '../../Components/UserInfo/UserInfo.js';
import Header from '../../Components/NavHeader/Header.js';

const Profile = () => {

    const headerStyle = {
        fontWeight:"bold",
        padding:"30px"
    }
    return(
        <div>
            <Header></Header>
            <UserInfo></UserInfo>
        </div>
    );

};

export default Profile;