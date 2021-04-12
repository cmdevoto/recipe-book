import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import Parse from "parse";
import Login from "../../Layouts/Login/Login";
import Home from "../../Layouts/Home/Home";

//const ProtectedRoute = ({ component: Component, flag, path, ...rest }) => {
const ProtectedRoute = ({ component: Component, path}) => { 
  const history = useHistory();
  console.log("history and rest: ", history);

  console.log("prev", window.history.previous)
  let currentUser = Parse.User.current();
  console.log("current user: ", currentUser);

 
  //return currentUser ? (Component={Login} ? <Redirect to={Home} /> : <Component />) : <Redirect to="/login" />
  return currentUser ? <Component /> : <Redirect to="/login" />;
};

export default ProtectedRoute;
