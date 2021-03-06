import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import Parse from "parse";

//const ProtectedRoute = ({ component: Component, flag, path, ...rest }) => {
const ProtectedRoute = ({ component: Component}) => { 
  const history = useHistory();
  console.log("history and rest: ", history);

  console.log("prev", window.history.previous)
  let currentUser = Parse.User.current();
  console.log("current user: ", currentUser);

 
  return currentUser ? <Component /> : <Redirect to="/login" />;
};

export default ProtectedRoute;
