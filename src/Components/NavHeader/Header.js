import React from "react";
import Navigation from "./Navigation.js"
import "./Header.css"

function Header(){
    return(
        <div>
            <header className="Home-header">
            <p> Welcome to your Recipe Book!</p>
            </header>
            <Navigation></Navigation>
        </div>
    );
}

export default Header;