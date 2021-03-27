import Navigation from './Navbar/Navigation.js';
import RecipeCard from './RecipeFeed/RecipeCard.js';
import Feed from './RecipeFeed/Feed.js'
import React from "react";

const Components = () => {
    return (
      <div>
        <Navigation />
        <RecipeCard />
        <Feed />
      </div>
    );
  };
  
  export default Components;
  
