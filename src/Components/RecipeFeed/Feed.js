import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import {
    getAllRecipes,
    getById,
    createRecipe,
    removeRecipe
  } from "../../../src/Common/Services/LearnService";

const Feed = () => {
    const [recipes, setRecipes] = useState([]);

    // UseEffect to run when the page loads to
    // obtain async data and render
    useEffect(() => {
        getAllRecipes().then((recipes) => {
            console.log(recipes);
            setRecipes(recipes);
            console.log(recipes[1]);
        });
    }, []);

    let recipe_array = [];
    for (let i = 0; i < recipes.length; i++){
        let r = recipes[i];

        let r_name = r.get("name");
        let r_description = r.get("description");
        let r_imgPath = r.get("imgPath");
        let r_type = r.get("type");
        let r_ingredients = r.get("ingredients");
        let r_steps = r.get("steps");
        let r_notes = r.get("notes");

        recipe_array.push({
            name: r_name,
            description: r_description,
            imgPath: r_imgPath,
            type: r_type,
            ingredients: r_ingredients,
            steps: r_steps,
            notes: r_notes
        });
        
    }

    console.log(recipe_array);

    const [add, setAdd] = useState(false);
    const [remove, setRemove] = useState("");

    return(
        recipe_array.map((recipe) => {
            return (
                <div>
                    <RecipeCard name={recipe.name} imgPath={recipe.imgPath} description={recipe.description}></RecipeCard>
                </div>
            );
        })
    );
};

//<img src={require('../../images/focaccia.JPG')} />

export default Feed;