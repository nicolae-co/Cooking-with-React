import React from 'react'


export default function RecipeIngredientEdit(props) {
  const {
    ingredient,
    handleIngredientChange,
    handleIngredientDelete
  } =props

  function handleChange(changes){
    handleIngredientChange(ingredient.id, {...ingredient, ...changes})
}



  return (
    <>
      <input 
        className='recipe-edit__input' 
        type='text'
        onChange={(event)=>handleChange({name: event.target.value})}
        value={ingredient.name}
      />
      <input 
        className='recipe-edit__input' 
        type='text'
        value={ingredient.amount}
        onChange={(event)=>handleChange({amount: event.target.value})}
      />
      <button 
      onClick={()=>handleIngredientDelete(ingredient.id)}
        className='btn btn--danger'
      >
        &times;
      </button>
    </>
  )
}
