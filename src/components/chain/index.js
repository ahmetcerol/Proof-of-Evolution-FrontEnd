import React from "react";
import {
  ChainContainer,
  ChainInnerContainer,
  Title,
  Span,
  ChainLeftContainer,
  ChainRightContainer,
} from "./chainStyledComponents";
const Chain = () => {
  return (
    <div id="chain">
      <ChainContainer>
        <ChainInnerContainer>
          <ChainLeftContainer>
            <Title>Kazılmış Bloklar</Title>
            <Span>
              Şu ana kadar kazılmış tüm blokları görüntüleyebilirsiniz.{" "}
            </Span>
          </ChainLeftContainer>
        </ChainInnerContainer>
      </ChainContainer>
    </div>
  );
};

export default Chain;
