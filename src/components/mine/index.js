import React from "react";
import {
  Button,
  MineDataContainer,
  MineContainer,
  MineInnerContainer,
  Title,
  Span,
  MineLeftContainer,
  DropBox,
  MineRightContainer,
  MineDataPre
} from "./mineStyledComponent";

import { Bio } from "../../data/constants";
import axios from "axios";
import { useState } from "react";



const Mine = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleStartClick = () => {
    setIsLoading(true);

    axios.get(`http://localhost:8080/blockchain/${selectedOption.toLowerCase()}Mine`)
      .then(response => {
        setResponseData(response.data);
      })
      .catch(error => {
        console.error("API çağrısı başarısız oldu:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div id="mine">
    <MineContainer>
      <MineInnerContainer>
        <MineLeftContainer>
          <Title>{Bio.mineTitle}</Title>
          <Span> {Bio.mineSubTitle}</Span>
          <DropBox
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value={""}>Proof of Work</option>
            <option value={"poe"}>Genetik Algoritma</option>
            <option value={"aco"}>Karınca Kolonisi</option>
            <option value={"abc"}>Yapay Arı Kolonisi</option>
          </DropBox>
          <Button onClick={handleStartClick}>Başlat !</Button>
        </MineLeftContainer>
        <MineRightContainer>
          <MineDataContainer>
            {isLoading ? (
              <p>Yükleniyor...</p>
            ) : (
               <MineDataPre style={{ color: "black" }}>
              {responseData && JSON.stringify(responseData, null, 2)}
            </MineDataPre>
            )}
          </MineDataContainer>
        </MineRightContainer>
      </MineInnerContainer>
    </MineContainer>
  </div>
  );
};

export default Mine;
