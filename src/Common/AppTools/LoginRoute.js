import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import Parse from "parse";

//const ProtectedRoute = ({ component: Component, flag, path, ...rest }) => {
const LoginRoute = ({ component: Component }) => { 
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

  return currentUser ? <Redirect to="/Home" /> : <Component />;
};

export default LoginRoute;
