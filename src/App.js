import './App.css';
//import Components from "./Components/Components.js";
import Home from "./Layouts/Home/Home.js";
import Add from "./Layouts/Add/Add"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Env from "./environments.js";
import Parse from "parse";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

/*
function App() {
  return (
    <body className="App">
      <header className="App-header">
        <p>
          Welcome to your Recipe Book!
        </p>
      </header>
      <Components />
    </body>
  );
}
*/
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/add" exact component={Add}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
