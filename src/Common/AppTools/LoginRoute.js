import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import Parse from "parse";

//const ProtectedRoute = ({ component: Component, flag, path, ...rest }) => {
const LoginRoute = ({ component: Component }) => { 
  const history = useHistory();
  console.log("history and rest: ", history);

  let currentUser = Parse.User.current();
  console.log("current user: ", currentUser);



  return currentUser ? <Redirect to="/Home" /> : <Component />;
};

export default LoginRoute;
