import React, { useEffect, useState } from "react";
import {
    getCurrentUserFull,
    getCurrentUserRecipeNumber
} from "../../Common/Services/UserLearnService";
import Badge from "react-bootstrap/Badge";

const Profile = () => {

    const user = getCurrentUserFull();
    const username = user.attributes.username;
    const email = user.attributes.email;
    const dateString = user.createdAt.toString();
    const updatedString = user.updatedAt.toString();

    const [rNum, setRNum] = useState([]);

    const profileStyle = {
        padding:"30px",
    }

    const contentStyle = {
        textAlign: "left",
        marginLeft: "40px"
    }

    const recipeNum = getCurrentUserRecipeNumber();
    recipeNum.then(function(result) {
        setRNum(result)
    })

    return (
        <div>
            <h3 style={profileStyle}>Profile Information</h3>
            <h5 style={contentStyle}>Username: <Badge variant="secondary">{username}</Badge></h5>
            <h5 style={contentStyle}>Email: <Badge variant="secondary">{email}</Badge></h5>
            <h5 style={contentStyle}>Account Creation Date: <Badge variant="secondary">{dateString}</Badge></h5>
            <h5 style={contentStyle}>Account Last Updated Date: <Badge variant="secondary">{updatedString}</Badge></h5>
    
            <h5 style={contentStyle}>Number of Recipes Created: <Badge variant="secondary">{rNum}</Badge></h5>
        </div>
    )
};

export default Profile;

