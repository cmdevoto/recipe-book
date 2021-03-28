import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const RecipeCard = ( {name, imgPath, description} ) => {

    const cardStyle = {
        width: "20rem",
        margin: "30px"
    }

    return(
        <div>
        <Card style={cardStyle}>
            <Card.Img variant="top" src={imgPath} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary">Go To Recipe</Button>
            </Card.Body>
        </Card>
        </div>
    );
};

//<Card.Img variant="top" src={imgPath} />

export default RecipeCard;