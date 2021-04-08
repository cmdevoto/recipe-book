import Parse from "parse";
//import { logicalExpression } from "@babel/types";

// SERVICE FOR PARSE SERVER OPERATIONS

// CREATE ACTION ~ new recipe

export const createRecipe = (Name, Description, ImgPath, Type, Ingredients, Steps, Notes) => {
    const Recipe = Parse.Object.extend("Recipe");
    const recipe = new Recipe();

    // use setter to update the object
    recipe.set("name", Name);
    recipe.set("description", Description);
    recipe.set("imgPath", ImgPath);
    recipe.set("type", Type);
    recipe.set("ingredients", Ingredients);
    recipe.set("steps", Steps);
    recipe.set("notes", Notes);
    console.log(recipe)

    return recipe.save().then((result) => {
        return result;
    });
};

// READ ACTION - get recipe by ID

export const getById = (id) => {
    const Recipe = Parse.Object.extend("Recipe");
    const query = new Parse.Query(Recipe);
    return query.get(id).then((result) =>{
        return result;
    });
};

// READ ACTION - get recipe in Parse class recipe

export const getAllRecipes = () => {
    const Recipe = Parse.Object.extend("Recipe");
    const query = new Parse.Query(Recipe);
    // query.equalTo("user", user)
    return query.find().then((results) =>{
        return results;
    });
};

// READ ACTION -- get recipes made by certain user
export const getRecipes = (username) => {
    const Recipe = Parse.Object.extend("Recipe");
    const query = new Parse.Query(Recipe);
    query.equalTo("username", username)
    return query.find().then((results) =>{
        return results;
    });
};

// DELETE ACTION -- remove recipe by id

export const removeRecipe = (id) => {
    const Recipe = Parse.Object.extend("Recipe");
    const query = new Parse.Query(Recipe);
    query.get(id).then((recipe) => {
        return recipe.destroy();
    });
};