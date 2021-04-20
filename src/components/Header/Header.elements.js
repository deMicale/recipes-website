//assets
import styled from "styled-components";
// import colors from "../../assets/colors";
import device from "../../assets/breakpoints";


export const HeaderWrapper = styled.div `
    min-width: 100%;
    max-width: 100%;
    max-height: 10vh;
    min-height: 10vh;
    background-color: white;
    /* border: black 1px solid; */
    /* border-radius: 10px 10px 0px 0px; */
    position: fixed;
    top: 0px;
`
 export const TitleHeader = styled.h1 `
    padding: 4vh;
    font-size: 1em;
    color:rgb(138, 226, 6);
    @media ${device.deviceM}{
        font-size: 2em; 
        padding: 4vh;
    }
    @media ${device.deviceL}{
        font-size: 1.7em; 
        padding: 3vh;
    }

 `
