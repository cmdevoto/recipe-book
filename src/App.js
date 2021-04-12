import './App.css';
//import Components from "./Components/Components.js";
import Home from "./Layouts/Home/Home.js";
import Add from "./Layouts/Add/Add";
import Category from "./Layouts/Category/Category.js";
import Login from "./Layouts/Login/Login.js";
import Register from "./Layouts/Register/Register.js"
//import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import * as Env from "./environments.js";
import Parse from "parse";
import React from "react";
import ProtectedRoute from "./Common/AppTools/ProtectedRoute.js"
import LoginRoute from "./Common/AppTools/LoginRoute"

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

// redirects based on the path and calls the different layouts (Home and Add)

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <LoginRoute path="/login" exact component={Login}></LoginRoute>
          <LoginRoute path="/register" exact component={Register}></LoginRoute>
          <ProtectedRoute path="/Home" exact component={Home}></ProtectedRoute>
          <ProtectedRoute path="/add" exact component={Add}></ProtectedRoute>
          <ProtectedRoute path="/Breakfast" exact component={Category}></ProtectedRoute>
          <ProtectedRoute path="/Lunch" exact component={Category}></ProtectedRoute>
          <ProtectedRoute path="/Dinner" exact component={Category}></ProtectedRoute>
          <ProtectedRoute path="/Dessert" exact component={Category}></ProtectedRoute>
          <ProtectedRoute path="/Miscellaneous" exact component={Category}></ProtectedRoute>
          <ProtectedRoute path="/AllRecipes" exact component={Home}></ProtectedRoute>
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
