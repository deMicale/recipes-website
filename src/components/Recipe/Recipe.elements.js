import styled from "styled-components";
import device from "./../../assets/breakpoints";

export const RecipeWrapper = styled.div `
    display: flex;
    flex-direction: column;
    /* border: black solid 1px; */
    border-radius: 10px;
    background-color: white;
    min-width: 260px;
    min-height: 360px;
    max-height: 360px;
    margin: 3px;
    align-items: center;  
    @media ${device.deviceM} {
    max-width: 250px;
    height: 410px;
  }
  @media ${device.deviceL} {
    max-width: 280px;
    height: 410px;
  }
  @media ${device.deviceXL} {
    max-width: 335px;
    height: 40px;
  }
`

export const RecipeTitle = styled.h2 `
    padding: 0.5vh;
    font-size: 0.9em;
    margin: 3px 0px 0px 0px;
    height: 5%;
    line-height: 1.2em;
    /* white-space: nowrap; */
    /* overflow: hidden; */
    /* text-overflow: ellipsis; */

    @media ${device.deviceM} {
        height: 32%;
    }
    @media ${device.deviceXL} {
        height: 32%;
    }
`
export const RecipeIngredients = styled.ul `
    font-family: Helvetica;
    font-size: 1.1em;
    margin-left: 15px;
    padding: 0px;
    height: 50% ;
    text-overflow:ellipsis;
    overflow: hidden;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
`    
export const IngredientsWord = styled.h3 `
    font-family: Helvetica;
    font-size: 0.8em;
    margin: 0px 0px 5px 0px;
`

export const Ingredient = styled.li `
    padding: 0.2vh;
    list-style: none; 
    font-family: Helvetica;
    font-size: 0.6em;
`
export const Kcal = styled.p `
    padding: 1vh;
    font-size: 0.9em;
    margin: 3px 0px 7px 0px;
    line-height: 0.9em;
`
export const ImageWrapper = styled.div `
    display: flex;
    padding: 1vh;
    justify-content: center;
`
export const RecipeImg = styled.img `
    /* padding: 2vh;
    width: 250px;
    padding: 1vh; */
    width: 95%;
    min-height: 120px;
    max-height: 170px;
    height: fit-content;
    border-radius: 10%;
    margin: 0px;

    @media ${device.deviceM} {
    width: 100%;
        min-height: 144px;
    }
`
