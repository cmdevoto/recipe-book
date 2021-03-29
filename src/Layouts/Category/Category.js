import CategoryFeed from '../../Components/RecipeFeed/CategoryFeed.js';
import Header from '../../Components/NavHeader/Header.js';
import React from "react";


const Category = () => {

    const feedStyle = {
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center"
    }

    return (
        <body>
            <div>
                <Header></Header>
                <CategoryFeed style={feedStyle}></CategoryFeed>
            </div>
        </body>
    );
};
  
  export default Category;