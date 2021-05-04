import Parse from "parse";
//import { logicalExpression } from "@babel/types";

// SERVICE FOR PARSE SERVER OPERATIONS

// CREATE ACTION ~ new user

export const createUser = (newUser) => {
    const user = new Parse.User();

    // use setter to update the object
    user.set("email", newUser.email);
    user.set("username", newUser.username);
    user.set("password", newUser.password);
    
    console.log("Creating user: ", user);

    return user
        .signUp()
        .then((newUserSaved) => {
            return newUserSaved;
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
};

export const logInUser = (email, password) => {
    console.log("Logging in user: ", email);

    return Parse.User
        .logIn(email, password).then((userLoggedIn) => {
            return userLoggedIn;
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
};

export const loggedOut = () => {
    Parse.User.logOut().then(
        (success) => {
            console.log('successfully logged out');
            console.log('Parse User is now: ', Parse.User.current()); 
        },
        (error) => {
            console.log('error logging out.');
        });
};

// READ ACTION - get recipe in Parse class recipe

export const getAllUsers = () => {
    const User = Parse.Object.extend("User");
    const query = new Parse.Query(User);
    return query.find().then((results) =>{
        return results;
    });
};

// READ ACTION

export const getByUsername = (username) => {
    const User = Parse.Object.extend("User");
    const query = new Parse.Query(User);
    return query.get(username).then((result) =>{
        return result;
    });
};



export const getByEmail = (email) => {
    const User = Parse.Object.extend("User");
    const query = new Parse.Query(User);
    query.equalTo("email", email)
    return query.find().then((result) =>{
        return result;
    });
};

export const getByPassword = (password) => {
    const User = Parse.Object.extend("User");
    const query = new Parse.Query(User);
    return query.get(password).then((result) =>{
        return result;
    });
};



export const resetPassword = async (email) =>{
    console.log("resetting in user: ", email);

    try {
        const resetPassword = await Parse.User
            .requestPasswordReset(email);
        console.log('sent email');
        alert(`Check Your Inbox!`);
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
};


/* Delete attempts*/
export const removeRecipe = (id) => {
    const Recipe = Parse.Object.extend("Recipe");
    const query = new Parse.Query(Recipe);
    query.get(id).then((recipe) => {
        return recipe.destroy();
    });
};
// DELETE ACTION -- remove user by username
//has auth error
export const removeUser = (currUser) => {
 //store current user
 //log out
 //clear memory storage
 // delete account
        return currUser.destroy()
            .then((success) => {
                    console.log('successfully deleted');
                    console.log('Parse User is now: ', Parse.User.current()); 
                },
                (error) => {
                    console.log('error deleting.', error);
                });
    
    
};

//destroy not a functin ERROR
export const deleteTest = () => {
    Parse.User.destroy().then(
        (success) => {
            console.log('successfully deleted');
            console.log('Parse User is now: ', Parse.User.current()); 
        },
        (error) => {
            console.log('error deleting');
        });
}
//destroy not a functin ERROR
export const removeUser2 = async (username) =>{
    console.log("deleting  user: ", username);
    console.log('Parse User is now: ', Parse.User.current()); 
    try {
        const deleteUser = await Parse.User
            .destroy().then(function(){
                console.log('deleting user')
                console.log('Parse User is now: ', Parse.User.current()); 
                });
    
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
};