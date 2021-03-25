import './App.css';
import Navigation from './Components/Navbar/Navigation.js';
import RecipeCard from './Components/RecipeCard.js';
import  AxiosTest  from './Components/AxiosTest.js';

import * as Env from "./environments";
import Parse from "parse";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL

function App() {

  return (
    <body className="App">
      <header className="App-header">
        <p>
          Welcome to your Recipe Book!
        </p>
      </header>
      <Navigation></Navigation>
      <AxiosTest></AxiosTest>
      <RecipeCard></RecipeCard>
    </body>
  );
}

export default App;
