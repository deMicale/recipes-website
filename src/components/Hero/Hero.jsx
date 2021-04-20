//assets
import foodHero from '../../assets/images/foodHero.jpg';
import {HeroWrapper,
        HeroImg
        } from "./Hero.elements.js";

const Hero = () => {
    return(
        <HeroWrapper>
            <HeroImg
                src={foodHero} 
                alt="food"
            />
        </HeroWrapper>
    )
}
export default Hero;