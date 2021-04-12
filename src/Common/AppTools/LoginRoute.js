import React from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import Parse from "parse";
import Home from "../../Layouts/Home/Home";
import Login from "../../Layouts/Login/Login";
import Category from "../../Layouts/Category/Category";

//const ProtectedRoute = ({ component: Component, flag, path, ...rest }) => {
const LoginRoute = ({ component: Component, path }) => { 
  const history = useHistory();
  console.log("history and rest: ", history);

  let currentUser = Parse.User.current();
  console.log("current user: ", currentUser);

  /*if(currentUser){
    if( path.localcompare('/login') || path.localcompare('/register')){
        return <Redirect to="/home" />;
    }
  }*/
//&& !(path.localeCompare('/login'))
/*if(currentUser ){
    console.log("trying to go to login")
    console.log("desired path", path)
    return ( <Route to="/Breakfast" exact component={Category}></Route>);
  }
return(
    <Route path="/login" exact component={Login}></Route>
)*/

  return currentUser ? <Redirect to={Home} /> : <Component />;
};

export default LoginRoute;
