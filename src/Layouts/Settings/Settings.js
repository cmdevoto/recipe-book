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

    
    const [selectedFile, setSelectedFile] = useState(null);
    //const [name, setName] = useState("");


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
/*<FileUpload onFileSelectSuccess={(file) => setSelectedFile(file)}
                        onFileSelectError={({ error }) => alert(error)}></FileUpload>
*/
  export default Settings;