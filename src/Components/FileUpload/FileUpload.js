import Feed from '../../Components/RecipeFeed/Feed.js';
import React, { useEffect, useState, useRef } from "react";
import Header from '../../Components/NavHeader/Header.js';
import Form from "react-bootstrap/Form";
import Parse from "parse";
import Button from "react-bootstrap/Button";
import { uploadFile} from "../../Common/Services/FileLearnService";
import {resetPassword, loggedOut} from "../../Common/Services/UserLearnService";
import './FileUpload.css'
// Home Screen Layout -- utilizes Header and Feed 

const FileUpload = ({onFileSelectError, onFileSelectSuccess}) => {
    const fileInput = useRef(null)
    /* Set profile pic as default or new profile*/
    const [imgPath, setImgPath] = useState();
    console.log('if check', Parse.User.current().get("profile"));

    /*Profile info*/ 
    var user = Parse.User.current();
    var name= user.get("username");
    var email = user.get("email")

    if(Parse.User.current().get("profile") != null){
        var profilePath = Parse.User.current().get("profile").url();
        console.log('in profile path IF');
        //var profilePath = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==";
    }
    else{
        console.log('in profile path else');
        var profilePath = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0b4c759-ad9c-4425-a9f4-ab89e2fd9837/de8cefl-35c0bc59-59b9-42ab-b19f-5c73828bb78e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwYjRjNzU5LWFkOWMtNDQyNS1hOWY0LWFiODllMmZkOTgzN1wvZGU4Y2VmbC0zNWMwYmM1OS01OWI5LTQyYWItYjE5Zi01YzczODI4YmI3OGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.81ixeN9b4cfDmfBlskK9CUyAMDtRhYNU7lfwTI8WI5Q";
    }
    const handleFileInput = (e) => {

        //onFileSelect(e.target.files[0]);
        const file = e.target.files[0];

        console.log('file input e check', file);
        console.log("handling input");
        if (file){
            onFileSelectSuccess(file);
            const name = file.name;
            const currUser = Parse.User.current();
            console.log('file info in HandleInput', file, name);
            uploadFile(name, file, currUser);
            
        }
        else onFileSelectError({ error: "Retry uploading profile iamge" });

        //console.log('profile path',Parse.User.current().get("profile").url());
    }
    const onClickHandlerReset = (e) => {
        e.preventDefault();
        console.log("handled reset");
        var email = user.get("email")
        // Trigger add flag to create recipe and
        // re-render list with new recipe
        resetPassword(email)

      };

    return (
        <div >
            <div >
            <div class="card">
                <h1>{name}</h1>
                <p class="title">{email}</p>
                <img style={{height:300, 
                            width: 300,
                            borderRadius: 150
                            }}
                        src={profilePath} className="justify-content-md-center"></img>
                <br/>
                <label  for="upload-photo"> <img style={{width:40,
                height: 40}}src="https://static.thenounproject.com/png/625182-200.png"/></label>
                <input type="file" id="upload-photo" onChange={handleFileInput} accept='.jpeg, .png, JPG, .jpg'/>
                <p><button  class="uploadButton"onClick={() => window.location.reload(false)}>Update Profile</button></p>
                <p><button  class="uploadButton"onClick={onClickHandlerReset}>Reset Password</button></p>
                <p><button  class="uploadButton"onClick={loggedOut}>Logout</button></p>
            </div>
            
        </div>
        </div>
    );
}


export default FileUpload;


/*
Notes
    -convert file to base 64 in file service
    -use the conversion to save the file to the parse.File
    -supposedly that gives back a url that points to the profile
    -default file attribute to point to blank.png
    -second attribute that points to new profile picture
*/

 