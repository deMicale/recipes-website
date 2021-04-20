import styled from "styled-components";
import device from "./../../assets/breakpoints";

export const SearchBarWrap = styled.form `
    top: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 10vh;

    @media ${device.deviceM}{
        top: 40vh;
        left: 23vh;
    }
    @media ${device.deviceL}{
        top: 60vh;
        left: 65vh;
    }
`
export const SearchInput = styled.input `
    width: 18vh;
    border: none;
    padding: 10px;
    top: 25vh;
    border-radius: 10% 0% 0% 10%;
    @media ${device.deviceM}{
        width: 20vh;
        padding: 20px;
    }
    @media ${device.deviceL}{
        width: 35vh;
        padding: 20px;
        font-size: 2rem;
    }
`
export const SearchButton = styled.button ` 
    background-color: greenyellow;
    border: none;
    border-radius: 0% 10% 10% 0%;
    padding: 10px 10px;
    color: white;
    top: 10vh; 
    @media ${device.deviceM}{
        padding: 20px;
    }
    @media ${device.deviceL}{
        padding: 20px;
        font-size: 2rem;
    }
`