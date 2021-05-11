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
        
    }
    else{
        console.log('in profile path else');
        var profilePath = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0b4c759-ad9c-4425-a9f4-ab89e2fd9837/de8cefl-35c0bc59-59b9-42ab-b19f-5c73828bb78e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwYjRjNzU5LWFkOWMtNDQyNS1hOWY0LWFiODllMmZkOTgzN1wvZGU4Y2VmbC0zNWMwYmM1OS01OWI5LTQyYWItYjE5Zi01YzczODI4YmI3OGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.81ixeN9b4cfDmfBlskK9CUyAMDtRhYNU7lfwTI8WI5Q";
    }
    const handleFileInput = (e) => {
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
        else onFileSelectError({ error: "Retry uploading profile image" });

    }
    /* Reset Password Handler*/
    const onClickHandlerReset = (e) => {
        e.preventDefault();
        console.log("handled reset");
        var email = user.get("email")
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

 