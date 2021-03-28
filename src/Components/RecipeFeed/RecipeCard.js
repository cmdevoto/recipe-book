import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

/*
class RecipeCard extends Component{
    render() {
        const { name, description, imgPath, type, ingredients, steps, notes } = this.props.recipe;
        return(
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgPath} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">Go To Recipe</Button>
                </Card.Body>
            </Card>
        );
    }
}
*/
const RecipeCard = ( {name, imgPath, description} ) => {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgPath} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary">Go To Recipe</Button>
            </Card.Body>
        </Card>
    );
};


export default RecipeCard;