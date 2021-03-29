import BreakfastFeed from '../../Components/RecipeFeed/BreakfastFeed.js';
import Header from '../../Components/NavHeader/Header.js';
import React from "react";


const Breakfast = () => {

    const feedStyle = {
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center"
    }

    return (
        <body>
            <div>
                <Header></Header>
                <BreakfastFeed style={feedStyle}></BreakfastFeed>
            </div>
        </body>
    );
};
  
  export default Breakfast;