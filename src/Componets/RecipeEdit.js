import React , {useContext}from 'react'
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import { RecipeContext } from './App';
import {v4 as uuidv4} from 'uuid'

export default function RecipeEdit({recipe}) {
    const {handleRecipeChange, handleRecipeSelect} = useContext(RecipeContext)

    function handleChange(changes){
        handleRecipeChange(recipe.id, {...recipe, ...changes})
    }

    function handleIngredientChange(id, ingredient){
        const newIngredients = [...recipe.ingredients]
        const index = newIngredients.findIndex(i=> i.id === id)
        newIngredients[index] = ingredient
        handleChange({ingredients: newIngredients})
    }
    
    function handleIngredientAdd(){
        const newIngredient = {
            id: uuidv4(),
            name: '',
            amount: ''
        }
        handleChange({ingredients: [...recipe.ingredients, newIngredient]})
    }
    
    function handleIngredientDelete(id){
        handleChange({ingredients: recipe.ingredients.filter(i=> i.id !==id)})
    }

  return (
    <div className='recipe-edit'>
        <div className='recipe-edit__remove-button-container'>
            <button 
                onClick={()=> handleRecipeSelect(undefined)}
                className='btn recipe-edit__remove-button'>
                    &times;
            </button>
        </div>
        <div className='recipe-edit__details-grid'>
            <label 
                className='recipe-edit__label' 
                htmlFor='name'>
                    Name
            </label>
            <input 
                type="text" 
                name="name" 
                id="name" 
                value={recipe.name}
                onInput={event => handleChange({name: event.target.value})}
                className='recipe-edit__input'
            />
            <label 
                className='recipe-edit__label'
                htmlFor='cookTime'>
                    Cook Time
            </label>
            <input 
                type="text" 
                name="cookTime" 
                id="cookTime"
                value={recipe.cookTime}
                onInput={event => handleChange({cookTime: event.target.value})}
                className='recipe-edit__input' />
            <label 
                className='recipe-edit__label'
                htmlFor='servings'>
                    Servings
            </label>
            <input 
                type="number" 
                min="1" 
                name="servings" 
                value={recipe.servings}
                onInput={event => handleChange({servings: parseInt(event.target.value) || ''})}
                id="servings"
                className='recipe-edit__input'
                 />
            <label 
                className='recipe-edit__label'
                htmlFor='instructions'>
                    Instructions
            </label>
            <textarea className='recipe-edit__input' 
                name="instructions" 
                id='instructions'
                value={recipe.instructions}
                onInput={event => handleChange({instructions: event.target.value})}
            />

            
        </div>
        <br />
        <label className='recipe-edit__label'>Ingredients</label>
        <div className='recipe-edit__ingredient-grid'>
            <div>Name</div>
            <div>Amount</div>
            <div></div>
            {recipe.ingredients.map(ingredient =>(
                <RecipeIngredientEdit 
                key={ingredient.id}
                handleIngredientChange={handleIngredientChange}
                handleIngredientDelete={handleIngredientDelete}
                ingredient={ingredient} />
            ))}
            
        </div>
        <div className='recipe-edit__add-ingredient-btn-container'>
            <button 
            onClick={()=>handleIngredientAdd()}
                className='btn btn--primary'
            >
                Add Ingredient
            </button>
        </div>
    </div>
  )
}
