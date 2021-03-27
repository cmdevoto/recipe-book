import './App.css';
import Components from "./Components/Components.js";
// import Navigation from './Components/Navbar/Navigation.js';
// import RecipeCard from './Components/RecipeCard.js';
// import  AxiosTest  from './Components/AxiosTest.js';

import * as Env from "./environments.js";
import Parse from "parse";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

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

export default App;
