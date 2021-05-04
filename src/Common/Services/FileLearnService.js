import Parse from "parse";
import ReactBootstrap from 'react-bootstrap';

export const uploadFile = (name,file, currUser) =>{
    let parseFile = new Parse.File(name, file);
    /* save file*/
    parseFile.save().then( (success)=>{
        console.log('file success');
    }, (error)=>{
        console.log('saving file error',error);
    }

    )
    console.log('parseFile created ', parseFile);
    console.log('parse file url check', parseFile.url());
    
    currUser.set("profile", parseFile);
    /* save new file to user*/
    Parse.User.current().save().then( (success) =>{
        console.log("successfully saved")
        // The file has been saved to Parse.
        
        //currUser.set("profile", parseFile);
        console.log('GET user data', Parse.User.current());
        console.log('GET request to user', Parse.User.current().get("profile").url());

    }, (error)=> {
        console.log("error", error);
        // The file either could not be read, or could not be saved to Parse.
    });

}


/*
export const saveFile = (name, file) =>{
    let parseFile = new Parse.File(name, file);
    parseFile.save({
    progress: (progressValue, loaded, total, { type }) => {
        if (type === "upload" && progressValue !== null) {
        // Update the UI using progressValue
            console.log('file created: ', name)
        }
    }
    });
}
*/
/*
export const photoUpload = () =>{
    var fileUploadControl = $("#imageEl")[0];

    
        if (fileUploadControl.files.length > 0) {
            console.log("inside IF")
            var file = fileUploadControl.files[0];
            //var name = "profile.jpg";
            var name = file.name;
            var parseFile = new Parse.File(name, file);
            parseFile.save().then(function() {
                // The file has been saved to Parse.
                console.log('saved file', name);
                console.log(parseFile.url())
            }, function(error) {
                // The file either could not be read, or could not be saved to Parse.
            });
        }

}*/