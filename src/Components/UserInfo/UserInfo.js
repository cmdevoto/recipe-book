import React, { useEffect, useState } from "react";
import {
    getCurrentUserFull
} from "../../Common/Services/UserLearnService";

const Profile = () => {

    const user = getCurrentUserFull();
    console.log(user);
    const username = user.attributes.username;
    const email = user.attributes.email;
    const dateString = user.createdAt.toString();
    const updatedString = user.updatedAt.toString();

    return (
        <div>
            <h3>Profile Information</h3>
            <p>{username}</p>
            <p>{email}</p>
            <p>{dateString}</p>
            <p>{updatedString}</p>
        </div>
    )
};

export default Profile;

