import styled from 'styled-components';
import device from '../../assets/breakpoints';

export const RecipesCarouselWrap = styled.div `
  display: flex;
  max-height: 80vh;
  width: 100%;
  /* border : black solid 1px; */
  overflow: scroll;
  overflow-y: hidden;
  flex-wrap: nowrap;
  position: relative;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  
  @media ${device.deviceM} {
    height: 100vh;
    overflow: hidden;
  }
`