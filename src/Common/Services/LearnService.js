import Parse from "parse";
import { logicalExpression } from "@babel/types";

// SERVICE FOR PARSE SERVER OPERATIONS

// CREATE ACTION ~ new lesson with Name

export const createRecipe = (Name) => {
    console.log('creating: ', Name);
    const Recipe = Parse.Object.extend("Recipe");
    const recipe = new Recipe();

    // use setter to update the object
    recipe.set("name", Name);
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

// DELETE ACTION -- remove recipe by id

export const removeLesson = (id) => {
    const Recipe = Parse.Object.extend("Recipe");
    const query = new Parse.Query(Recipe);
    query.get(id).then((recipe) => {
        return recipe.destroy();
    });
};