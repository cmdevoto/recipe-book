import {
    getAllRecipes,
    getById,
    createRecipe
} from "../../../src/Common/Services/LearnService";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const AddRecipe = () => {

    return(
        <div>
            <Form style={{margin:"30px"}}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Recipe Name</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={2}/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>Image Path</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Type of Recipe</Form.Label>
                    <Form.Control as="select">
                        <option>Breakfast</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                        <option>Dessert</option>
                        <option>Miscellaneous</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea2">
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control as="textarea" rows={3}/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea3">
                    <Form.Label>Steps</Form.Label>
                    <Form.Control as="textarea" rows={3}/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea4">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control as="textarea" rows={3}/>
                </Form.Group>
            </Form>
            <Button style={{margin:"30px"}} variant="primary" type="submit">
                Submit
            </Button>
        </div>
    );
};

export default AddRecipe;