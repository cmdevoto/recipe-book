import FileUpload from '../../Components/FileUpload/FileUpload';
import React, { useEffect, useState } from "react";
import Header from '../../Components/NavHeader/Header.js';
import Form from "react-bootstrap/Form";
import Parse from "parse";
import Button from "react-bootstrap/Button";
import {photoUpload} from "../../Common/Services/FileLearnService";
// Home Screen Layout -- utilizes Header and Feed 

const Settings = () => {
    const feedStyle = {
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center"
    }

    //Settings page that handles error or success from displaying profile, gets profile information from FileUpload component
    
    const [selectedFile, setSelectedFile] = useState(null);


    return (
        //<body>
            <div >
                <Header>  </Header>

                <FileUpload onFileSelectSuccess={(file) => setSelectedFile(file)}
                        onFileSelectError={({ error }) => alert(error)}></FileUpload>

            </div>
        //</body>
    );
};

  export default Settings;