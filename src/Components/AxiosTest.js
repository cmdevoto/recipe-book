import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    recipes: []
  }

  componentDidMount() {
    axios.get("src/data.json")
      .then(res => {
        const recipes = res.data;
        this.setState({ recipes });
      })
  }

  render() {
    return (
      <ul>
        { this.state.recipes.map(recipe => <li>{recipe.name}</li>)}
      </ul>
    )
  }
}