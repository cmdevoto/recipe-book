import React from "react";
//import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const RecipeCard = ( {name, imgPath, description, ingredients, steps, notes, username} ) => {

    // center this on the page 
    const cardStyle = {
        width: "30rem",
        margin: "auto",
        padding: "10px"
    }

    return(
        <div>
        <Card style={cardStyle}>
            <Card.Img variant="top" src={imgPath} />
            <Card.Body>
            <Card.Title style={{textAlign:"center", fontWeight:"900"}}>{name}</Card.Title>
            <Card.Subtitle style={{textAlign:"center"}}>{description}</Card.Subtitle>
            <Card.Title>Ingredients</Card.Title>
            <Card.Text>{ingredients}</Card.Text>
            <Card.Title>Steps</Card.Title>
            <Card.Text>{steps}</Card.Text>
            <Card.Title>Notes</Card.Title>
            <Card.Text>{notes}</Card.Text>
            <Card.Subtitle style={{textAlign:"center"}}>Recipe By: {username}</Card.Subtitle>
            </Card.Body>
        </Card>
        </div>
    );
};
//<Card.Img variant="top" src={imgPath} />

export default RecipeCard;