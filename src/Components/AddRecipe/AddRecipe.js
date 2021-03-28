import React, { useEffect, useState } from "react";
import {
    createRecipe
} from "../../../src/Common/Services/LearnService";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const AddRecipe = () => {

    const [recipes, setRecipes] = useState([]);
    
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
            // Add the newly created lesson to the lessons array
            // to render the new list of lessons (thru spread/concatination)
            setRecipes([...recipes, newRecipe]);
    
            //Note: CANNOT MANIPULATE STATE ARRAY DIRECTLY
            //lessons = lessons.push(lesson)
            //setLessons(lessons)
          });
        }
    }, [name, description, imgPath, type, ingredients, steps, notes, recipes, add]);

    const onClickHandler = (e) => {
        e.preventDefault();
        console.log("handled");
        // Trigger add flag to create lesson and
        // re-render list with new lesson
        setAdd(true);
      };
    
      // Handler to track changes to the child input text
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
                <Form.Group controlId="ControlInput1">
                    <Form.Label>Recipe Name</Form.Label>
                    <Form.Control id="name" onChange={onChangeHandlerName} type="text"/>
                </Form.Group>

                <Form.Group controlId="ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control id="desc" onChange={onChangeHandlerDesc} as="textarea" rows={2}/>
                </Form.Group>

                <Form.Group controlId="ControlInput2">
                    <Form.Label>Image Path</Form.Label>
                    <Form.Control id="path" onChange={onChangeHandlerImg} type="text"/>
                </Form.Group>

                <Form.Group controlId="ControlSelect1">
                    <Form.Label>Type of Recipe</Form.Label>
                    <Form.Control id="type" onChange={onChangeHandlerType} as="select">
                        <option>Breakfast</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                        <option>Dessert</option>
                        <option>Miscellaneous</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="ControlTextarea2">
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control id="ingredients" onChange={onChangeHandlerIngredients} as="textarea" rows={3}/>
                </Form.Group>

                <Form.Group controlId="ControlTextarea3">
                    <Form.Label>Steps</Form.Label>
                    <Form.Control id="steps" onChange={onChangeHandlerSteps} as="textarea" rows={3}/>
                </Form.Group>

                <Form.Group controlId="ControlTextarea4">
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