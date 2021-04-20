import React from 'react';
//assets
import {
    RecipeWrapper,
    RecipeTitle,
    RecipeIngredients,
    Ingredient,
    Kcal,
    ImageWrapper,
    RecipeImg,
    IngredientsWord
} from "./Recipe.elements.js";


const Recipe = ({title, calories, image, ingredients}) => {
     let i=0;
    return(
        <RecipeWrapper>
              <ImageWrapper>
                <RecipeImg
                    src={image} alt=''
                /> 
            </ImageWrapper>
            
            <RecipeTitle>{title}</RecipeTitle>
            <RecipeIngredients>
                <IngredientsWord>Ingredients:</IngredientsWord>
                 {ingredients.map(ingredient => (
                    <Ingredient key = {i++}> 
                        {ingredient.text}
                    </Ingredient>
                ))}
            </RecipeIngredients>
            <Kcal> Calories: kcal {calories.toFixed(2)}</Kcal>

          
        </RecipeWrapper>
    );
}

export default Recipe;