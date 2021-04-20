import styled from "styled-components";
import device from "../../assets/breakpoints";

export const HeroWrapper = styled.div `
    margin-top: 15vh;
    /* border: black solid 1px; */
    width: 100%;
    /* height: 80vh; */
    /* margin-bottom: 5vh; */

    @media ${device.deviceM} {
        min-width: 100%;
        max-width: none;
    }
    @media ${device.deviceL} {
        width: 100%;
        /* max-width: none; */
    }
` 

export const HeroImg = styled.img `
    width: 100%;
    /* max-height: 100%; */
    z-index: -5;
`

