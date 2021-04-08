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

// DELETE ACTION -- remove user by username

export const removeUser = (username) => {
    const User = Parse.Object.extend("User");
    const query = new Parse.Query(User);
    query.get(username).then((user) => {
        return user.destroy();
    });
};