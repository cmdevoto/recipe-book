import IndividualFeed from '../../Components/RecipeFeed/IndividualFeed.js';
import Header from '../../Components/NavHeader/Header.js';
import React from "react";


const Individual = () => {

    const feedStyle = {
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center"
    }

    return (
        //<body>
            <div>
                <Header></Header>
                <IndividualFeed style={feedStyle}></IndividualFeed>
            </div>
        //</body>
    );
};

  export default Individual;