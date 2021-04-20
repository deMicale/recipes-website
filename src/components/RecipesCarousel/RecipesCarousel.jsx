import {RecipesCarouselWrap} from './RecipesCarousel.elements';
import Recipe from '../Recipe/Recipe';

const RecipesCarousel = ({recipes}) => {
    return(
        <RecipesCarouselWrap>
           {recipes.map(recipe => (
              <Recipe
                key = {recipe.recipe.label}
                title = {recipe.recipe.label}
                calories = {recipe.recipe.calories}
                image = {recipe.recipe.image}
                ingredients = {recipe.recipe.ingredients}
              />
            ))}
        </RecipesCarouselWrap>
    )
}
export default RecipesCarousel;