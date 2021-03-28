import Feed from '../../Components/RecipeFeed/Feed.js';
import Header from '../../Components/NavHeader/Header.js';
import React from "react";


const Home = () => {

    const feedStyle = {
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center"
    }

    return (
        <body>
            <div>
                <Header></Header>
                <Feed style="feedStyle"></Feed>
            </div>
        </body>
    );
};
  
  export default Home;