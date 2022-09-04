import React from "react";
import RecipeList from "./RecipeList";


export const ThemeContext = React.createContext()

function App() {
  return (
    <RecipeList recipes = {sampleRecipes}/>
  );
}


const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on chicken\n 2. Put chicken in oven\n 3. Eat the chicken"
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: '0:45',
    instructions: "1. Put paprika on pork\n 2. Put pork in oven\n 3. Eat the pork"
  }
]

export default App;
