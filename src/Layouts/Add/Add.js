import React, { useEffect, useState } from "react";
import Navigation from '../../Components/Navbar/Navigation.js';
import AddRecipe from '../../Components/AddRecipe/AddRecipe.js';
import '../Home/Home.css';


const Add = () => {
    return (
        <body>
            <header className="Home-header">
            <p> Welcome to your Recipe Book!</p>
            </header>
            <div>
                <Navigation />
                <AddRecipe/>
            </div>
        </body>
    );
};

export default Add;