import './App.css';
//import Components from "./Components/Components.js";
import Home from "./Layouts/Home/Home.js";
import Add from "./Layouts/Add/Add";
import Category from "./Layouts/Category/Category.js";
import Login from "./Layouts/Login/Login.js";
import Register from "./Layouts/Register/Register.js"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import * as Env from "./environments.js";
import Parse from "parse";
import React, { useEffect, useState } from "react";



Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

// redirects based on the path and calls the different layouts (Home and Add)

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/Home" exact component={Home}></Route>
          <Route path="/register" exact component={Register}></Route>
          <Route path="/Breakfast" exact component={Category}></Route>
          <Route path="/Lunch" exact component={Category}></Route>
          <Route path="/Dinner" exact component={Category}></Route>
          <Route path="/Dessert" exact component={Category}></Route>
          <Route path="/Miscellaneous" exact component={Category}></Route>
          <Route path="/AllRecipes" exact component={Home}></Route>
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
}
/*
<Route path="/login" exact component={Login}></Route>
          <Route path="/register" exact component={Register}></Route>
          <Route path="/add" exact component={Add}></Route>
          <Route path="/Breakfast" exact component={Category}></Route>
          <Route path="/Lunch" exact component={Category}></Route>
          <Route path="/Dinner" exact component={Category}></Route>
          <Route path="/Dessert" exact component={Category}></Route>
          <Route path="/Miscellaneous" exact component={Category}></Route>
          <Route path="/AllRecipes" exact component={Home}></Route>
          <Redirect to="/login" />*/

export default App;
