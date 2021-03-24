import './App.css';
import Navigation from './Components/Navigation.js';
import RecipeCard from './Components/RecipeCard.js';

function App() {
  return (
    <body className="App">
      <header className="App-header">
        <p>
          Welcome to your Recipe Book!
        </p>
      </header>
      <Navigation></Navigation>

      <RecipeCard></RecipeCard>
    </body>
  );
}

export default App;
