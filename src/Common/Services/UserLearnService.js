import Parse from "parse";
//import { logicalExpression } from "@babel/types";

// SERVICE FOR PARSE SERVER OPERATIONS

// CREATE ACTION ~ new user

export const createUser = (Username, Password, Email) => {
    console.log('creating: ', Username);
    const User = Parse.Object.extend("User");
    const user = new User();

    // use setter to update the object
    user.set("username", Username);
    user.set("password", Password);
    user.set("email", Email);
    return user.save().then((result) => {
        return result;
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