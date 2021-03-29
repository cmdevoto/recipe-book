//import React, { useEffect, useState } from "react";
//import Navigation from '../../Components/NavHeader/Navigation.js';
import React from "react";
import Header from '../../Components/NavHeader/Header.js'
import AddRecipe from '../../Components/AddRecipe/AddRecipe.js';
import '../Home/Home.css';

// layout for the add page -- uses Header and AddRecipe
const Add = () => {
    return (
        <body>
            <div>
                <Header />
                <AddRecipe/>
            </div>
        </body>
    );
};

export default Add;