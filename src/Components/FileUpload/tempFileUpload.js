import Feed from '../../Components/RecipeFeed/Feed.js';
import React, { useEffect, useState, useRef } from "react";
import Header from '../../Components/NavHeader/Header.js';
import Form from "react-bootstrap/Form";
import Parse from "parse";
import Button from "react-bootstrap/Button";
import { uploadFile} from "../../Common/Services/FileLearnService";
// Home Screen Layout -- utilizes Header and Feed 

const FileUpload = ({onFileSelectError, onFileSelectSuccess}) => {
    const fileInput = useRef(null)
    /* Set profile pic as default or new profile*/
    const [imgPath, setImgPath] = useState();
    const [newImg, setNewImg] = useState(false);
    const [file, setFile] = useState();
    console.log('if check', Parse.User.current().get("profile"));
   
    useEffect(() =>{
        if (newImg && file) {
            console.log("use Effect");
            onFileSelectSuccess(file);
            const name = file.name;
            uploadFile(name, file, Parse.User.current()).then((profileAdded) => {
                if (profileAdded){
                    alert(
                        `You successfully changed your profile!`
                    );
                }
                setNewImg(false);
            });
        }
    }, [newImg, file]);

    if(Parse.User.current().get("profile") != null){
        var profilePath = Parse.User.current().get("profile").url();
        console.log('in profile path IF');
        //var profilePath = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==";
    }
    else{
        console.log('in profile path else');
        var profilePath = "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg";
    }
    const handleFileInput = (e) => {

        //onFileSelect(e.target.files[0]);
        setFile(e.target.files[0]);
        setNewImg(true);
        //console.log('profile path',Parse.User.current().get("profile").url());

    }

    return (
        <div >
            <input type="file" id="inputProfile" onChange={handleFileInput} accept='.jpeg, .png, JPG, .jpg'/>
            <button onClick={e => fileInput.current && fileInput.current.click()} >Upload</button>
            <img style={{height:200, 
                        width: 200,
                        borderRadius:100 }}
                    src={profilePath}></img>
        </div>
    );
}
//      <button onClick={e => fileInput.current && fileInput.current.click()} >Upload</button>
  export default FileUpload;
/*
Notes
    -convert file to base 64 in file service
    -use the conversion to save the file to the parse.File
    -supposedly that gives back a url that points to the profile
    -default file attribute to point to blank.png
    -second attribute that points to new profile picture
*/

  /*
  //currently doing nothing
    const onClickHandlerUpload = (e) => {
        e.preventDefault();
        console.log("handled upload");
        //console.log('file info', selectedFile);
      };
    return (
        //<body>
            <div>
                <img id="imageEl" src="" alt=""/>
                <input type="file" id="inputEl" value={selectedFile} onChange={(e) => setSelectedFile(e.target.files[0])}/>
                <button id="buttonEl" onClick={onClickHandlerUpload}>Upload</button>
            </div>
        //</body>
    );*/