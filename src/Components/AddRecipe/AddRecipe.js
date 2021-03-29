import React, { useEffect, useState } from "react";
import {
    createRecipe
} from "../../../src/Common/Services/LearnService";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
toast.configure()

const AddRecipe = () => {

    const [recipes, setRecipes] = useState([]);
    
    // set up variables for the recipes

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [imgPath, setImgPath] = useState();
    const [type, setType] = useState();
    const [ingredients, setIngredients] = useState();
    const [steps, setSteps] = useState();
    const [notes, setNotes] = useState();

    const [add, setAdd] = useState(false);


    useEffect(() => {
        // Check for add flag and make sure name state variable is defined
        if (name && description && imgPath && type && ingredients && steps && notes && add) {
          createRecipe(name, description, imgPath, type, ingredients, steps, notes).then((newRecipe) => {
            setAdd(false);
            // Add the newly created recipe to the recipe array
            setRecipes([...recipes, newRecipe]);
          });
        }
    }, [name, description, imgPath, type, ingredients, steps, notes, recipes, add]);

    
    const onClickHandler = (e) => {
        e.preventDefault();
        console.log("handled");
        // Trigger add flag to create recipe and
        // re-render list with new recipe
        setAdd(true);
        toast.success("Recipe Added", {position: toast.POSITION.TOP_LEFT})

      };
    
      // Handler to track changes to the child input text -- different for each text field
      const onChangeHandlerName = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        // Continuously updating name to be added on submit
        setName(e.target.value);
      };
      const onChangeHandlerDesc = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        // Continuously updating name to be added on submit
        setDescription(e.target.value);
      };
      const onChangeHandlerImg = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        // Continuously updating name to be added on submit
        setImgPath(e.target.value);
      };
      const onChangeHandlerType = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        // Continuously updating name to be added on submit
        setType(e.target.value);
      };
      const onChangeHandlerIngredients = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        // Continuously updating name to be added on submit
        setIngredients(e.target.value);
      };
      const onChangeHandlerSteps = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        // Continuously updating name to be added on submit
        setSteps(e.target.value);
      };
      const onChangeHandlerNotes = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        // Continuously updating name to be added on submit
        setNotes(e.target.value);
      };

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

export default AddRecipe;