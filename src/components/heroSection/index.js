import React from "react";
import {
  Title,
  Span,
  HeroContainer,
  HeroInnerContainer,
  HeroLeftContainer,
  HeroRightContainer,
} from "./heroSectionStyledComponent";
import { Bio } from "../../data/constants";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>{Bio.name}</Title>
            <Span>  <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
    {Bio.description}
            </Span>
          </HeroLeftContainer>
          <HeroRightContainer></HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
