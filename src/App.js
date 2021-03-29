import './App.css';
//import Components from "./Components/Components.js";
import Home from "./Layouts/Home/Home.js";
import Add from "./Layouts/Add/Add";
import Category from "./Layouts/Category/Category.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Env from "./environments.js";
import Parse from "parse";
import Breakfast from "./Layouts/Category/Breakfast.js";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

// redirects based on the path and calls the different layouts (Home and Add)

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/add" exact component={Add}></Route>
          <Route path="/Breakfast" exact component={Breakfast}></Route>
          <Route path="/Lunch" exact component={Breakfast}></Route>
          <Route path="/Dinner" exact component={Breakfast}></Route>
          <Route path="/Dessert" exact component={Breakfast}></Route>
          <Route path="/Miscellaneous" exact component={Breakfast}></Route>
          <Route path="/AllRecipes" exact component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
