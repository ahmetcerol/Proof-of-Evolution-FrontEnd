import React from "react";
import {
  ChainContainer,
  ChainInnerContainer,
  Title,
  Span,
  ChainLeftContainer,
  ChainRightContainer,
} from "./chainStyledComponents";
import { Bio } from "../../data/constants";
const Chain = () => {
  return (
    <div id="chain">
      <ChainContainer>
        <ChainInnerContainer>
          <ChainLeftContainer>
            <Title>{Bio.chainTitle}</Title>
            <Span>{Bio.chainSubTitle}
            </Span>
          </ChainLeftContainer>
        </ChainInnerContainer>
      </ChainContainer>
    </div>
  );
};

export default Chain;
