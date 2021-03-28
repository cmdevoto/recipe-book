import React, { useEffect, useState } from "react";
import Navigation from '../../Components/NavHeader/Navigation.js';
import Header from '../../Components/NavHeader/Header.js'
import AddRecipe from '../../Components/AddRecipe/AddRecipe.js';
import '../Home/Home.css';


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