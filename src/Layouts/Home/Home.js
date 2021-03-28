import Navigation from '../../Components/Navbar/Navigation.js';
import Feed from '../../Components/RecipeFeed/Feed.js'
import React from "react";
import './Home.css';

const Home = () => {

    const feedStyle = {
        display: "flex",
        flexFlow: "column wrap"  
    }

    return (
        <body className="Home">
            <header className="Home-header">
            <p> Welcome to your Recipe Book!</p>
            </header>
            <div>
                <Navigation />
                <Feed style={feedStyle}/>
            </div>
        </body>
       
    );
  };
  
  export default Home;