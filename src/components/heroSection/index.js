import React from "react";
import {
  Title,
  Span,
  HeroContainer,
  HeroInnerContainer,
  HeroLeftContainer,
  HeroRightContainer,
} from "./heroSectionStyledComponent";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>Merhabalar, PoE</Title>
            <Span>
              <b>&nbsp;</b>Geleneksel Proof of Work (PoW) protokolünün güvenlik
              özelliklerini korurken, madencilik işlemlerinin bir kısmını
              Evrimsel algoritmaların işlenmesi için kullanma amacını taşır. Bu
              yaklaşım, enerji tüketimini azaltarak PoW'un sürdürülebilirliğini
              artırma potansiyeli taşır. PoE, güvenlik, enerji verimliliği
              sağlama amacı taşıyan yeni bir blockchain konsensüs protokolünün
              temelini oluşturuyor.
            </Span>
          </HeroLeftContainer>
          <HeroRightContainer></HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
