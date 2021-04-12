import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import Home from "../../Layouts/Home/Home";
import Category from "../../Layouts/Category/Category";
import Login from "../../Layouts/Login/Login";
import Register from "../../Layouts/Register/Register";
import Parse from "parse";

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ component: Component, flag, path, ...rest }) => {
  const history = useHistory();
  console.log("history and rest")  
  console.log(history)
  console.log("path", path); // show rest.path in the console
  // you could redirect back to /auth if the flag is not true
  let currentUser = Parse.User.current();
  console.log(currentUser);
  console.log("protected routes auth",  Parse.User.current().authenticated())
  //return flag ? <Component /> : <Redirect to="/" />;
  return (
    <div>
      { Parse.User.current().authenticated() ? (
        <Redirect to="/Home" />
      ) : (
        <Redirect to="/login" />
      )}
    </div>

  )
  
  //currentUser ? <Component /> : <Redirect to="/" />;
  //Parse.User.current().authenticated() ? (
  /*
  return (
    <div>
      {flag ? (
        <Redirect to={Home} />
      ) : (
        <Redirect to={Home}/>
      )}
    </div>
  );*/
};

export default ProtectedRoute;
