import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import {
    getAllRecipes
  } from "../../Common/Services/RecipeLearnService";

const CategoryFeed = () => {
    const [recipes, setRecipes] = useState([]);

    // UseEffect to run when the page loads to
    // obtain async data and render
    useEffect(() => {
        getAllRecipes().then((recipes) => {
            //console.log(recipes);
            setRecipes(recipes);
            //console.log(recipes[1]);
        });
    }, []);

    //grab current category
    const type = window.location.pathname.substring(1)
    //console.log(type)
    let recipe_array = [];
    console.log("FOR")
    for (let i = 0; i < recipes.length; i++){
        let r = recipes[i];
        let r_temp = r.get("type");
        console.log("this is r_temp");
        console.log(r_temp);
        //Only add recipe to array if the categories match
        let eq = r_temp.localeCompare(type);
        if (eq === 0){
            let r_type= r.get("type");
            let r_name = r.get("name");
            let r_description = r.get("description");
            let r_imgPath = r.get("imgPath");
            let r_ingredients = r.get("ingredients");
            let r_steps = r.get("steps");
            let r_notes = r.get("notes");
            let r_u = r.get("username");
        
            // this is only because we do not have a log in
            // when users can log in, the username will be automatically recorded
            // now when adding recipe, it will say not specified
            
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
    console.log("End FOR")

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

//<img src={require('../../images/focaccia.JPG')} />

export default CategoryFeed;