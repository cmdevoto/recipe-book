import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import Home from "../../Layouts/Home/Home";
import Login from "../../Layouts/Login/Login";


// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ component: Component, flag, ...rest }) => {
  const history = useHistory();
  console.log("history and rest")  
  console.log(history)
  console.log(rest); // show rest.path in the console
  // you could redirect back to /auth if the flag is not true
  return (
    <div>
      {flag ? (
        <Redirect to={Home} />
      ) : (
        <Redirect to={Home}/>
      )}
    </div>
  );
};

export default ProtectedRoute;
