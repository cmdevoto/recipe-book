import Parse from "parse";
import { BrowserRouter as Redirect } from "react-router-dom";
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
            console.log('Parse User is now: ', Parse.User.current());  //the same user!!
            //<Redirect to="/login" /> 
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
/*
export const getRecipes = (username) => {
    const Recipe = Parse.Object.extend("Recipe");
    const query = new Parse.Query(Recipe);
    query.equalTo("username", username)
    return query.find().then((results) =>{
        return results;
    });
};
};*/
// DELETE ACTION -- remove user by username

export const removeUser = (username) => {
    const User = Parse.Object.extend("User");
    const query = new Parse.Query(User);
    query.get(username).then((user) => {
        return user.destroy();
    });
};