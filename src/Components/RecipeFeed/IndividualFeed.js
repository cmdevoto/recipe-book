import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import {
    getAllRecipes
  } from "../../Common/Services/RecipeLearnService";
import {
    getCurrentUser
} from "../../Common/Services/UserLearnService";

const IndividualFeed = () => {
    const [recipes, setRecipes] = useState([]);

    // UseEffect to run when the page loads to
    // obtain async data and render
    useEffect(() => {
        getAllRecipes().then((recipes) => {
            setRecipes(recipes);
        });
    }, []);

    //grab current category
    const currUser = getCurrentUser();
    console.log(currUser)
    let recipe_array = [];
  
    for (let i = 0; i < recipes.length; i++){
        let r = recipes[i];
        let temp = r.get("username");
        let u_temp = temp.id
        
        //Only add recipe to array if the usernames match
        let eq = u_temp.localeCompare(currUser);
        if (eq === 0){
            let r_type= r.get("type");
            let r_name = r.get("name");
            let r_description = r.get("description");
            let r_imgPath = r.get("imgPath");
            let r_ingredients = r.get("ingredients");
            let r_steps = r.get("steps");
            let r_notes = r.get("notes");
            let r_u = r.get("username");
        
            // in case username is not defined:
            
            let r_username = "not specified"
            if (typeof r_u !== 'undefined'){
                r_username = r_u.id
            }

            recipe_array.push({
                id: r.id,
                name: r_name,
                description: r_description,
                imgPath: r_imgPath,
                type: r_type,
                ingredients: r_ingredients,
                steps: r_steps,
                notes: r_notes,
                username: r_username
            });
        }
        
    }

    console.log(recipe_array);

    return(
        recipe_array.map((recipe) => {
            return (
                <div>
                    <RecipeCard key={recipe.id} name={recipe.name} imgPath={recipe.imgPath} description={recipe.description} ingredients={recipe.ingredients} steps={recipe.steps} notes={recipe.notes} username={recipe.username}></RecipeCard>
                </div>
            );
        })
    );
};

export default IndividualFeed;