import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddRecipeForm = ( {onChangeHandlerName, onChangeHandlerDesc, onChangeHandlerImg, onChangeHandlerType, onChangeHandlerIngredients, onChangeHandlerSteps, onChangeHandlerNotes, onClickHandler} ) => {
    return(
        <div>
            <Form style={{margin:"30px"}}>
                <Form.Group>
                    <Form.Label>Recipe Name</Form.Label>
                    <Form.Control id="name" onChange={onChangeHandlerName} type="text"/>
                </Form.Group>
    
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control id="desc" onChange={onChangeHandlerDesc} as="textarea" rows={2}/>
                </Form.Group>
    
                <Form.Group>
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control id="path" onChange={onChangeHandlerImg} type="text"/>
                </Form.Group>
    
                <Form.Group>
                    <Form.Label>Type of Recipe</Form.Label>
                    <Form.Control id="type" onChange={onChangeHandlerType} as="select">
                        <option>Select Category</option>
                        <option>Breakfast</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                        <option>Dessert</option>
                        <option>Miscellaneous</option>
                    </Form.Control>
                </Form.Group>
    
                <Form.Group>
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control id="ingredients" onChange={onChangeHandlerIngredients} as="textarea" rows={3}/>
                </Form.Group>
    
                <Form.Group>
                    <Form.Label>Steps</Form.Label>
                    <Form.Control id="steps" onChange={onChangeHandlerSteps} as="textarea" rows={3}/>
                </Form.Group>
    
                <Form.Group>
                    <Form.Label>Notes</Form.Label>
                    <Form.Control id="notes" onChange={onChangeHandlerNotes} as="textarea" rows={3}/>
                </Form.Group>
            </Form>
            <Button style={{margin:"30px"}} variant="primary" onClick={onClickHandler} type="submit">
                Submit
            </Button>
        </div>
    );

};

export default AddRecipeForm;